const Users = require("../Model/userModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const sendEmail = require("../Controllers/SendEmail");
const CLIENT_ID = process.env.GOOGLE_CLIENT_IDS;
const client = new OAuth2Client(CLIENT_ID);

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await Users.findOne({ email });
      if (user)
        return res.json({
          success: false,
          msg: "The email already exists.",
        });

      if (password.length < 6)
        return res.json({
          success: false,
          msg: "Password is at least 6 characters long.",
        });

      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });

      // Save mongodb
      await newUser.save();

      // Then create jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: newUser._id, name }); //muon lay gi lay o day
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/api/auth/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({
        success: true,
        accesstoken,
        msg: "Register Successfully 😍!!",
      });
    } catch (err) {
      return res.json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.json({ msg: "Please Login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({
          success: true,
          msg: "Login Successfully 😉",
          refreshtoken: accesstoken,
        });
      });
    } catch (err) {
      return res.json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (!user)
        return res.json({ success: false, msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.json({ success: false, msg: "Incorrect password." });

      // If login success , create access token and refresh token
      const accessToken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/api/auth/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({
        success: true,
        accessToken,
        msg: "Login Successfully 😍 !",
      });
    } catch (err) {
      return res.json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  profile: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user) return res.json({ msg: "User does not exist." });
      res.json({
        success: true,
        user,
      });
    } catch (err) {
      return res.json({ msg: err.message });
    }
  },
  UploadProfile: async (req, res) => {
    try {
      const { name, image } = req.body;
      if (!image) return res.json({ msg: "No image upload" });

      await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          name,
          image,
        }
      );
      res.json({
        success: true,
        msg: "Updated Profile Successfully !",
      });
    } catch (err) {
      return res.json({ msg: err.message });
    }
  },
  ChangePassword: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("+password");
      const { password, oldPassword, confirmPassword } = req.body;
      if (!password)
        return res.json({
          success: false,
          msg: "Password are not empty.",
        });
      if (!confirmPassword)
        return res.json({
          success: false,
          msg: " Confirm are not empty.",
        });
      if (!oldPassword)
        return res.json({
          success: false,
          msg: "Old Password are not empty.",
        });
      if (password.length < 6)
        return res.json({
          success: false,
          msg: "Password is at least 6 characters long.",
        });
      let reg = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
      ).test(password);
      if (!reg) {
        return res.json({
          success: false,
          msg: "Includes 8 characters, uppercase, lowercase and some and special characters.",
        });
      }
      if (confirmPassword !== password) {
        return res.json({
          success: false,
          msg: "Password and confirm password does not match!",
        });
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch)
        return res.json({
          success: false,
          msg: " OldPassword Incorrect",
        });
      const salt = await bcrypt.genSalt(10);
      const passwords = await bcrypt.hash(password, salt);
      const userPassword = await Users.findByIdAndUpdate(
        { _id: user.id },
        { password: passwords },
        { new: true }
      );
      return res.json({
        success: true,
        msg: "Change Password Successfully 😂!",
      });
    } catch (err) {
      return res.json({ msg: err.message });
    }
  },
  ForgetPassword: async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });
    const { email } = req.body;
    if (!email) {
      res.json({
        success: false,
        msg: "Email are not empty. ",
      });
    }
    if (!user) {
      res.json({
        success: false,
        msg: "Account Not Exit",
      });
    }
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/password/reset/${resetToken}`;
    // const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
    try {
      await sendEmail({
        email: user.email,
        subject: `Tài Heo Dev Web`,
        message,
      });

      res.status(200).json({
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
  resetPassword: async (req, res) => {
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
        success: false,
        msg: "Reset Password Token is invalid or has been expired",
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.json({ success: false, msg: "Password does not password" });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    const salt = await bcrypt.genSalt(10);
    const passwords = await bcrypt.hash(user.password, salt);
    const userPassword = await Users.findByIdAndUpdate(
      { _id: user.id },
      { password: passwords },
      { new: true }
    );
    res.status(200).json({
      success: true,
      msg: "Reset successfully",
    });
  },
  LoginGoogle: async (req, res) => {
    const { tokenId } = req.body;
    client
      .verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID,
      })
      .then((response) => {
        const { email_verified, name, email, picture } = response.payload;
        console.log(response.payload);
        if (email_verified) {
          Users.findOne({ email }).exec((error, user) => {
            if (error) {
              return res.json({
                msg: "Account Not Exist",
              });
            } else {
              if (user) {
                const token = createAccessToken({ id: user._id });
                const refreshtoken = createRefreshToken({ id: user._id });

                res.cookie("refreshtoken", refreshtoken, {
                  httpOnly: true,
                  path: "/api/auth/refresh_token",
                  maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                });
                const { _id, name, email, picture } = user;
                res.json({
                  success: true,
                  accesstoken: token,
                  user: { _id, name, email, image: picture },
                });
              } else {
                let password = email + process.env.ACCESS_TOKEN_SECRET;
                let newUser = new Users({
                  name,
                  email,
                  password,
                  image: {
                    public_id: password,
                    url: picture,
                  },
                });
                newUser.save((err, data) => {
                  if (err) {
                    return res.json({
                      msg: "Account Not Exist",
                    });
                  }
                  const token = createAccessToken({ id: data._id });
                  const refreshtoken = createRefreshToken({ id: data._id });

                  res.cookie("refreshtoken", refreshtoken, {
                    httpOnly: true,
                    path: "/api/auth/refresh_token",
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
                  });
                  const { _id, name, email, image } = newUser;
                  res.json({
                    success: true,
                    token,
                    user: { _id, name, email, image },
                  });
                  console.log(user);
                });
              }
            }
          });
        }
      });
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
module.exports = userCtrl;
