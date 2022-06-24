const Users = require("../Model/userModel");
const UserVerifications = require("../Model/userVerificationModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const sendEmail = require("./SendEmail");
const fetch = require("node-fetch");
const CLIENT_ID = process.env.GOOGLE_CLIENT_IDS;
const client = new OAuth2Client(CLIENT_ID);
const path = require("path");
const STORAGE = require("../utils/Storage");
const CONSTANTS = require("../configs/contants");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const userCtrl = {
  //đăng ký tài khoản khách hàng
  registerCustomer: async (req, res) => {
    try {
      const { fullname, email, password, sex, date_of_birth, phone_number } =
        req.body;

      const user = await Users.findOne({ email });
      if (user)
        return res.json({
          status: 400,
          success: false,
          msg: "The email already exists.",
        });

      if (password.length < 6)
        return res.json({
          status: 400,
          success: false,
          msg: "Password is at least 6 characters long.",
        });

      //kiểm tra format password
      let reg = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
      ).test(password);

      if (!reg) {
        return res.json({
          status: 400,
          success: false,
          msg: "Password must contain at least one number and one uppercase and lowercase and special letter, and at least 6 or more characters ",
        });
      }

      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        fullname,
        email,
        password: passwordHash,
        sex,
        date_of_birth,
        phone_number,
      });

      // Save mongodb
      await newUser.save();

      //url to be used in the email
      const currentUrl = `${req.protocol}://${req.get("host")}/`;
      const uniqueString = uuidv4() + newUser.id;

      //hash unique string
      const hashedUniqueString = await bcrypt.hash(uniqueString, 10);

      const newVerification = new UserVerifications({
        userId: newUser.id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expiresAt: Date.now() + 3600000,
      });

      await newVerification.save();

      const confirmEmailUrl =
        currentUrl +
        "api/auth/customer/verify/" +
        newUser.id +
        "/" +
        uniqueString;

      //send email verification
      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: email,
        subject: `Verify Your Email`,
        template: "confirm-email",
        attachments: [
          {
            filename: "netflix.png",
            path: path.resolve("./views", "images", "netflix.png"),
            cid: "netflix_logo",
          },
        ],
        context: {
          confirmEmailUrl,
        },
      });

      return res.json({
        status: 200,
        success: true,
        msg: "Verification email sent to your email",
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: err.message,
      });
    }
  },

  verifyEmail: async (req, res) => {
    try {
      const { userId, uniqueString } = req.params;

      const userVerification = await UserVerifications.findOne({ userId });

      if (userVerification) {
        //if link expired then delete user
        const expiredAt = userVerification.expiresAt;
        const hashedUniqueString = userVerification.uniqueString;
        if (expiredAt < Date.now()) {
          await UserVerifications.deleteOne({ userId });
          await Users.deleteOne({ _id: userId });

          return res.json({
            status: 400,
            success: false,
            msg: "Link has expired. Please register again",
          });
        } else {
          const isMatch = await bcrypt.compare(
            uniqueString,
            hashedUniqueString
          );
          if (isMatch) {
            await Users.findOneAndUpdate({ _id: userId }, { verified: true });
            await UserVerifications.deleteOne({ userId });

            return res.sendFile(path.resolve("./views", "verify-success.html"));
          } else {
            return res.json({
              status: 400,
              success: false,
              msg: "Link invalid, unique string is not match",
            });
          }
        }
      } else {
        return res.json({
          status: 400,
          success: false,
          msg: "Link is invalid because userid incorrect",
        });
      }
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        msg: error.message,
      });
    }
  },

  //đăng ký tài khoản admin
  registerAdmin: async (req, res) => {
    try {
      const { fullname, email, password, sex, date_of_birth, phone_number } =
        req.body;

      const user = await Users.findOne({ email });
      if (user)
        return res.json({
          status: 400,
          success: false,
          msg: "The email already exists.",
        });

      if (password.length < 6)
        return res.json({
          status: 400,
          success: false,
          msg: "Password is at least 6 characters long.",
        });

      //kiểm tra format password
      let reg = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
      ).test(password);
      if (!reg) {
        return res.json({
          status: 400,
          success: false,
          message:
            "Password must contain at least one number and one uppercase and lowercase and special letter, and at least 6 or more characters ",
        });
      }

      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        fullname,
        email,
        password: passwordHash,
        sex,
        date_of_birth,
        phone_number,
        role: 1, //admin
      });

      // Save mongodb
      await newUser.save();

      //url to be used in the email
      const currentUrl = `${req.protocol}://${req.get("host")}/`;
      const uniqueString = uuidv4() + newUser.id;

      //hash unique string
      const hashedUniqueString = await bcrypt.hash(uniqueString, 10);

      const newVerification = new UserVerifications({
        userId: newUser.id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expiresAt: Date.now() + 21600000,
      });

      await newVerification.save();

      const confirmEmailUrl =
        currentUrl + "api/auth/admin/verify/" + newUser.id + "/" + uniqueString;

      //send email verification
      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: email,
        subject: `Verify Your Email`,
        template: "confirm-email",
        attachments: [
          {
            filename: "netflix.png",
            path: path.resolve("./views", "images", "netflix.png"),
            cid: "netflix_logo",
          },
        ],
        context: {
          confirmEmailUrl,
        },
      });

      return res.json({
        status: 200,
        success: true,
        msg: "Verification email sent to your email",
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: err.message,
      });
    }
  },

  //refresh token
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.json({ msg: "Please Login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id, role: user.role });

        res.json({
          status: 200,
          success: true,
          msg: "Login Successfully 😉",
          accessToken: accesstoken,
        });
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: err.message,
      });
    }
  },

  //đăng nhập tài khoản khách hàng
  loginCustomer: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email: email, role: 0 });
      if (!user)
        return res.json({
          status: 400,
          success: false,
          msg: "User does not exist.",
        });

      if (user.verified === false) {
        return res.json({
          status: 400,
          message: "Email hasn't been verified yet. Check your inbox",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.json({
          status: 400,
          success: false,
          msg: "Incorrect password.",
        });

      // If login success , create access token and refresh token
      const accessToken = createAccessToken({ id: user._id, role: 0 });
      const refreshtoken = createRefreshToken({ id: user._id, role: 0 });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/api/auth/customer/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({
        status: 200,
        success: true,
        accessToken,
        msg: "Login Successfully 😍 !",
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: err.message,
      });
    }
  },

  //đăng nhập tài khoản admin
  loginAdmin: async (req, res) => {
    try {
      const { email, password } = req.body;

      //kiểm tra người dùng có phải là admin
      const user = await Users.findOne({ email, role: 1 });
      if (!user) {
        return res.json({
          status: 400,
          success: false,
          msg: "User does not exist",
        });
      }

      if (user.verified === false) {
        return res.json({
          status: 400,
          message: "Email hasn't been verified yet. Check your inbox",
        });
      }

      //nếu đúng email thì kiểm tra mật khẩu
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.json({
          status: 400,
          success: false,
          msg: "Incorrect password",
        });
      }

      //nếu đăng nhập thành công, tạo token
      const accesstoken = createAccessToken({ id: user.id, role: user.role });
      const refreshtoken = createRefreshToken({ id: user.id, role: user.role });

      //lưu vào cookie
      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/api/auth/admin/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, //7d
      });

      return res.json({
        status: 200,
        success: true,
        accesstoken,
        msg: "Login Successfully 😍 !",
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: err.message,
      });
    }
  },

  //đăng xuất tài khoản khách hàng
  logoutCustomer: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", {
        path: "/api/auth/customer/refresh_token",
      });
      return res.json({
        status: 200,
        success: true,
        msg: "Logged out success",
      });
    } catch (err) {
      return res.json({
        status: 400,
        msg: err.message,
      });
    }
  },

  //đăng xuất tài khoản admin
  logoutAdmin: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", {
        path: "/api/auth/admin/refresh_token",
      });
      return res.json({
        status: 200,
        success: true,
        msg: "Logged out success",
      });
    } catch (err) {
      return res.json({
        status: 400,
        msg: err.message,
      });
    }
  },

  //xem profile
  profile: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id);
      if (!user)
        return res.json({
          status: 400,
          success: false,
          msg: "User does not exist.",
        });
      res.json({
        status: 200,
        success: true,
        user,
      });
    } catch (err) {
      return res.json({
        status: 400,
        msg: err.message,
      });
    }
  },

  //chỉnh sửa profile
  updateProfile: async (req, res) => {
    try {
      const { fullname, image, phone_number, sex, date_of_birth } = req.body;

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          fullname,
          image,
          phone_number,
          sex,
          date_of_birth,
          updatedAt: Date.now,
        }
      );
      res.json({
        status: 200,
        success: true,
        msg: "Updated Profile Successfully !",
      });
    } catch (err) {
      return res.json({
        status: 400,
        msg: err.message,
      });
    }
  },

  //chỉnh sửa mật khẩu
  ChangePassword: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("+password");
      const { password, oldPassword, confirmPassword } = req.body;
      if (!password)
        return res.json({
          status: 400,
          success: false,
          msg: "Password are not empty.",
        });

      if (!confirmPassword)
        return res.json({
          status: 400,
          success: false,
          msg: " Confirm are not empty.",
        });

      if (!oldPassword)
        return res.json({
          status: 400,
          success: false,
          msg: "Old Password are not empty.",
        });

      if (password.length < 6)
        return res.json({
          status: 400,
          success: false,
          msg: "Password is at least 6 characters long.",
        });

      let reg = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
      ).test(password);
      if (!reg) {
        return res.json({
          status: 400,
          success: false,
          msg: "Includes 6 characters, uppercase, lowercase and some and special characters.",
        });
      }
      if (confirmPassword !== password) {
        return res.json({
          status: 400,
          success: false,
          msg: "Password and confirm password does not match!",
        });
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch)
        return res.json({
          status: 400,
          success: false,
          msg: " Old Password Incorrect",
        });
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      const userPassword = await Users.findByIdAndUpdate(
        { _id: user.id },
        { password: passwordHash, updatedAt: Date.now },
        { new: true }
      );
      return res.json({
        status: 200,
        success: true,
        msg: "Change Password Successfully 😂!",
      });
    } catch (err) {
      return res.json({
        status: 400,
        msg: err.message,
      });
    }
  },
  //New Password
  NewPassword: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("+password");
      const { password, confirmPassword } = req.body;
      if (!password)
        return res.json({
          status: 400,
          success: false,
          msg: "Password are not empty.",
        });

      if (!confirmPassword)
        return res.json({
          status: 400,
          success: false,
          msg: " Confirm are not empty.",
        });

      if (password.length < 6)
        return res.json({
          status: 400,
          success: false,
          msg: "Password is at least 6 characters long.",
        });

      let reg = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
      ).test(password);
      if (!reg) {
        return res.json({
          status: 400,
          success: false,
          msg: "Includes 6 characters, uppercase, lowercase and some and special characters.",
        });
      }
      if (confirmPassword !== password) {
        return res.json({
          status: 400,
          success: false,
          msg: "Password and confirm password does not match!",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      const userPassword = await Users.findByIdAndUpdate(
        { _id: user.id },
        { password: passwordHash, updatedAt: Date.now },
        { new: true }
      );
      return res.json({
        status: 200,
        success: true,
        msg: "New PasswordSuccessfully 😂!",
      });
    } catch (err) {
      return res.json({
        status: 400,
        msg: err.message,
      });
    }
  },

  //quên mật khẩu tài khoản khách hàng
  forgetPasswordCustomer: async (req, res) => {
    const user = await Users.findOne({ email: req.body.email, role: 0 });
    const { email } = req.body;
    if (!email) {
      res.json({
        status: 400,
        success: false,
        msg: "Email are not empty. ",
      });
    }
    if (!user) {
      res.json({
        status: 400,
        success: false,
        msg: "Account Not Exit",
      });
    }
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/customer/password/reset/${resetToken}`;
    // const resetPasswordUrl = `${process.env.FRONTEND_URL}/customer/password/reset/${resetToken}`;
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
    try {
      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: user.email,
        subject: `Forgot Password`,
        template: "forgot-password",
        attachments: [
          {
            filename: "netflix.png",
            path: path.resolve("./views", "images", "netflix.png"),
            cid: "netflix_logo",
          },
          {
            filename: "question.png",
            path: path.resolve("./views", "images", "question.png"),
            cid: "question_img",
          },
        ],
        context: {
          resetPasswordUrl,
        },
      });

      return res.json({
        status: 200,
        success: true,
        msg: `Email sent to ${user.email} successfully`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: true });
      console.log(error);
    }
  },

  //quên mật khẩu tài khoản admin
  forgetPasswordAdmin: async (req, res) => {
    const user = await Users.findOne({ email: req.body.email, role: 1 });
    const { email } = req.body;
    if (!email) {
      res.json({
        status: 400,
        success: false,
        msg: "Email are not empty. ",
      });
    }
    if (!user) {
      res.json({
        status: 400,
        success: false,
        msg: "Account Not Exit",
      });
    }
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // const resetPasswordUrl = `${req.protocol}://${req.get(
    //   'host'
    // )}/admin/password/reset/${resetToken}`;
    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
    try {
      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: user.email,
        subject: `Forgot Password`,
        template: "forgot-password",
        attachments: [
          {
            filename: "netflix.png",
            path: path.resolve("./views", "images", "netflix.png"),
            cid: "netflix_logo",
          },
          {
            filename: "question.png",
            path: path.resolve("./views", "images", "question.png"),
            cid: "question_img",
          },
        ],
        context: {
          resetPasswordUrl,
        },
      });

      return res.json({
        status: 200,
        success: true,
        msg: `Email sent to ${user.email} successfully`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: true });
      console.log(error);
    }
  },

  //link đổi mật khẩu khi quên mật khẩu
  resetPassword: async (req, res) => {
    const { password, confirmPassword } = req.body;

    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await Users.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.json({
        status: 400,
        success: false,
        msg: "Reset Password Token is invalid or has been expired",
      });
    }

    if (!password)
      return res.json({
        status: 400,
        success: false,
        msg: "Password are not empty.",
      });

    if (!confirmPassword)
      return res.json({
        status: 400,
        success: false,
        msg: " Confirm are not empty.",
      });

    if (password.length < 6)
      return res.json({
        status: 400,
        success: false,
        msg: "Password is at least 6 characters long.",
      });

    let reg = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
    ).test(password);
    if (!reg) {
      return res.json({
        status: 400,
        success: false,
        msg: "Includes 6 characters, uppercase, lowercase and some and special characters.",
      });
    }

    if (confirmPassword !== password) {
      return res.json({
        status: 400,
        success: false,
        msg: "Password and confirm password does not match!",
      });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(user.password, salt);
    const userPassword = await Users.findByIdAndUpdate(
      { _id: user.id },
      { password: passwordHash },
      { new: true }
    );
    res.json({
      status: 200,
      success: true,
      msg: "Reset successfully",
    });
  },

  //đăng nhập gg
  LoginGoogleCustomer: async (req, res) => {
    const { tokenId } = req.body;
    client
      .verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID,
      })
      .then((response) => {
        const { email_verified, name, email, picture } = response.payload;
        // return res.json({
        //   data: response.payload,
        // });
        if (email_verified) {
          Users.findOne({ email, role: 0 }).exec((error, user) => {
            if (error) {
              return res.json({
                status: 400,
                success: false,
                msg: "Invalid Authentication",
              });
            } else {
              if (user) {
                const accesstoken = createAccessToken({
                  id: user._id,
                  role: user.role,
                });
                const refreshtoken = createRefreshToken({
                  id: user._id,
                  role: user.role,
                });

                res.cookie("refreshtoken", refreshtoken, {
                  httpOnly: true,
                  path: "/api/auth/customer/refresh_token",
                  maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                });
                const { _id, fullname, email, image } = user;
                res.json({
                  status: 200,
                  success: true,
                  msg: "Login successfully",
                  accesstoken,
                  user: { _id, fullname, email, image },
                });
              } else {
                // let password = email + process.env.ACCESS_TOKEN_SECRET;
                let password = "null";

                let newUser = new Users({
                  fullname: name,
                  email,
                  password,
                  image: {
                    public_id: password,
                    url: picture,
                  },
                  verified: true,
                });
                newUser.save((err, data) => {
                  if (err) {
                    return res.json({
                      status: 400,
                      success: false,
                      msg: "Invalid Authentication",
                    });
                  }
                  const accesstoken = createAccessToken({
                    id: data._id,
                    role: data.role,
                  });
                  const refreshtoken = createRefreshToken({
                    id: data._id,
                    role: data.role,
                  });

                  res.cookie("refreshtoken", refreshtoken, {
                    httpOnly: true,
                    path: "/api/auth/customer/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                  });
                  const { _id, fullname, email, image } = newUser;
                  res.json({
                    status: 200,
                    success: true,
                    msg: "Register successfully",
                    accesstoken,
                    user: { _id, fullname, email, image },
                  });
                  console.log(user);
                });
              }
            }
          });
        }
      });
  },
  //đăng nhập khách hàng fb
  LoginFacebook: async (req, res) => {
    const { userID, accessToken } = req.body;
    let urlGraphFacebook = STORAGE.getURIFromTemplate(
      CONSTANTS.STORAGE_GRAPH_FACEBOOK,
      {
        userID,
        accessToken,
      }
    );
    fetch(urlGraphFacebook, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        const { email, name, picture } = response;

        if (email) {
          Users.findOne({ email, role: 0 }).exec((error, user) => {
            console.log(user);
            if (error) {
              return res.json({
                status: 400,
                success: false,
                msg: "Invalid Authentication",
              });
            } else {
              if (user) {
                const accesstoken = createAccessToken({
                  id: user._id,
                  role: user.role,
                });
                const refreshtoken = createRefreshToken({
                  id: user._id,
                  role: user.role,
                });

                res.cookie("refreshtoken", refreshtoken, {
                  httpOnly: true,
                  path: "/api/auth/customer/refresh_token",
                  maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                });
                const { _id, name, email, image } = user;
                res.json({
                  status: 200,
                  success: true,
                  msg: "Login successfully",
                  accesstoken,
                  user: { _id, name, email, image },
                });
              } else {
                let password = "null";
                let newUser = new Users({
                  fullname: name,
                  email,
                  password: password,
                  image: {
                    public_id: password,
                    url: picture?.data?.url,
                  },
                  verified: true,
                });
                newUser.save((err, data) => {
                  if (err) {
                    return res.json({
                      status: 400,
                      success: false,
                      msg: "Invalid Authentication",
                    });
                  }
                  const accesstoken = createAccessToken({
                    id: user._id,
                    role: user.role,
                  });
                  const refreshtoken = createRefreshToken({
                    id: user._id,
                    role: user.role,
                  });

                  res.cookie("refreshtoken", refreshtoken, {
                    httpOnly: true,
                    path: "/api/auth/customer/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                  });
                  const { _id, name, email, image } = newUser;
                  res.json({
                    status: 200,
                    success: true,
                    msg: "Register successfully",
                    accesstoken,
                    user: { _id, name, email, image },
                  });
                });
              }
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  //đăng nhập gg tài khoản admin
  LoginGoogleAdmin: async (req, res) => {
    const { tokenId } = req.body;
    client
      .verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID,
      })
      .then((response) => {
        const { email_verified, name, email, picture } = response.payload;
        if (email_verified) {
          Users.findOne({ email, role: 1 }).exec((error, user) => {
            if (error) {
              return res.json({
                status: 400,
                success: false,
                msg: "Invalid Authentication",
              });
            } else {
              if (user) {
                const accesstoken = createAccessToken({
                  id: user._id,
                  role: user.role,
                });
                const refreshtoken = createRefreshToken({
                  id: user._id,
                  role: user.role,
                });

                res.cookie("refreshtoken", refreshtoken, {
                  httpOnly: true,
                  path: "/api/auth/admin/refresh_token",
                  maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                });
                const { _id, fullname, email, image } = user;
                res.json({
                  status: 200,
                  success: true,
                  msg: "Login successfully",
                  accesstoken,
                  user: { _id, fullname, email, image },
                });
              } else {
                let password = email + process.env.ACCESS_TOKEN_SECRET;
                let newUser = new Users({
                  fullname: name,
                  email,
                  password,
                  image: {
                    public_id: password,
                    url: picture,
                  },
                  verified: true,
                  role: 1,
                });
                newUser.save((err, data) => {
                  if (err) {
                    return res.json({
                      status: 400,
                      success: false,
                      msg: "Invalid Authentication",
                    });
                  }
                  const accesstoken = createAccessToken({
                    id: data._id,
                    role: data.role,
                  });
                  const refreshtoken = createRefreshToken({
                    id: data._id,
                    role: data.role,
                  });

                  res.cookie("refreshtoken", refreshtoken, {
                    httpOnly: true,
                    path: "/api/auth/admin/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                  });
                  const { _id, fullname, email, image } = newUser;
                  res.json({
                    status: 200,
                    success: true,
                    msg: "Register successfully",
                    accesstoken,
                    user: { _id, fullname, email, image },
                  });
                  console.log(user);
                });
              }
            }
          });
        }
      });
  },

  //Lấy ra danh sách tài khoản admin
  async getAllAdminAccount(req, res) {
    try {
      const data = await Users.find({ role: 1, verified: true });

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get all admin account successfully",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get all admin account",
      });
    }
  },

  //Lấy ra danh sách tài khoản khách hàng
  async getAllCustomerAccount(req, res) {
    try {
      const data = await Users.find({ role: 0, verified: true });

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get all customer account successfully",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get all customer account",
      });
    }
  },

  //Xem chi tiết thông tin tài khoản khách hàng
  async getDetailCustomerAccount(req, res) {
    try {
      const userId = req.params.id;
      const user = await Users.findById({ _id: userId });
      if (!user) {
        return res.json({
          status: 400,
          success: false,
          msg: "User not found",
        });
      }
      return res.json({
        status: 200,
        success: true,
        msg: "Get detail user successfully",
        data: user,
      });
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        // msg: "Failed to get detail user",
        msg: error.message,
      });
    }
  },

  //Chỉnh sửa thông tin tài khoản khách hàng
  async updateInfoCustomerAccount(req, res) {
    try {
      const { fullname, image, phone_number, date_of_birth, sex } = req.body;
      const userId = req.params.id;

      await Users.findByIdAndUpdate(
        { _id: userId, role: 0, verified: true },
        {
          fullname,
          image,
          phone_number,
          date_of_birth,
          sex,
        }
      );

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Updated info customer account successfully",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to update info customer account ",
      });
    }
  },

  //Danh sách tài khoản khách hàng chưa verify
  GetAllCustomerUncheck: async (req, res) => {
    try {
      const data = await UserVerifications.find({
        expiresAt: { $lt: Date.now() },
      }).select("userId");

      const users = await Users.find({ verified: false }).select("_id");

      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < users.length; j++) {
          if (data[i].userId == users[j].id) {
            await Users.deleteOne({ _id: users[j].id });
            await UserVerifications.deleteOne({ userId: data[i].userId });
          }
        }
      }

      const usersUncheck = await Users.find({
        verified: false,
        role: 0,
      }).select("-password");

      return res.json({
        status: 200,
        success: true,
        msg: "Get list customer uncheck verification email successfully",
        data: usersUncheck,
      });
    } catch (error) {
      return res.json({ status: 400, success: false, msg: error.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2h" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
module.exports = userCtrl;
