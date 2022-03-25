const express = require("express");
const userCtrl = require("../Controllers/userController.js");
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");
const router = express.Router();

//đăng ký tài khoản admin
router.post("/register", userCtrl.registerAdmin);

//xác thực email đăng ký
router.get("/verify/:userId/:uniqueString", userCtrl.verifyEmail);

//đăng nhập tài khoản admin
router.post("/login", userCtrl.loginAdmin);

//refresh token
router.get("/refresh_token", userCtrl.refreshToken);

//đăng xuất
router.get("/logout", userCtrl.logoutAdmin);

//xem profile
router.get("/profile", auth, authAdmin, userCtrl.profile);

//cập nhập profile
router.patch("/profile/update", auth, authAdmin, userCtrl.updateProfile);

//thay đổi mật khẩu
router.patch("/changePassword", auth, authAdmin, userCtrl.ChangePassword);

//quên mật khẩu tài khoản admin
router.post("/forget", userCtrl.forgetPasswordAdmin);

//link reset mật khẩu khi quên mật khẩu
router.put("/password/reset/:token", userCtrl.resetPassword);

//đăng nhập gg tài khoản admin
router.post("/loginGoogle", userCtrl.LoginGoogleAdmin);

//Lấy ra danh sách tài khoản admin
router.get("/getAllAdmin", auth, authAdmin, userCtrl.getAllAdminAccount);

//Lấy ra danh sách tài khoản khách hàng
router.get("/getAllCustomer", auth, authAdmin, userCtrl.getAllCustomerAccount);

//Lấy ra danh sách tài khoản khách hàng chưa check email
router.get("/getAllCustomerUncheck", userCtrl.GetAllCustomerUncheck);

//Xem chi tiết tài khoản khách hàng
router.get(
  "/getDetailCustomer/:id",
  auth,
  authAdmin,
  userCtrl.getDetailCustomerAccount
);

//Chỉnh sửa thông tin tài khoản khách hàng
router.patch(
  "/customerAccount/:id/update/info",
  auth,
  authAdmin,
  userCtrl.updateInfoCustomerAccount
);

module.exports = router;
