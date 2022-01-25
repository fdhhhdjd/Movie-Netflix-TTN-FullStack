const express = require('express');
const userCtrl = require('../Controllers/userController.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const router = express.Router();

//đăng ký tài khoản admin
router.post('/register', userCtrl.registerAdmin);

//đăng nhập tài khoản admin
router.post('/login', userCtrl.loginAdmin);

//refresh token
router.get('/refresh_token', userCtrl.refreshToken);

//đăng xuất
router.get('/logout', userCtrl.logout);

//xem profile
router.get('/profile', auth, authAdmin, userCtrl.profile);

//cập nhập profile
router.patch('/profile/update', auth, authAdmin, userCtrl.updateProfile);

//thay đổi mật khẩu
router.patch('/changePassword', auth, authAdmin, userCtrl.ChangePassword);

//quên mật khẩu tài khoản admin
router.post('/forget', userCtrl.forgetPasswordAdmin);

//link reset mật khẩu khi quên mật khẩu
router.put('/password/reset/:token', userCtrl.resetPassword);

//đăng nhập gg tài khoản admin
router.post('/loginGoogle', userCtrl.LoginGoogleAdmin);

module.exports = router;
