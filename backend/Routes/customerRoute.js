const userCtrl = require('../Controllers/userController');
const auth = require('../middleware/auth');
const authCustomer = require('../middleware/authCustomer.js');
const router = require('express').Router();

//đăng ký tài khoản khách hàng
router.post('/register', userCtrl.registerCustomer);

//đăng nhập tài khoản khách hàng
router.post('/login', userCtrl.loginCustomer);

//refresh token
router.get('/refresh_token', userCtrl.refreshToken);

//đăng xuất
router.get('/logout', userCtrl.logout);

//xem profile khách hàng
router.get('/profile', auth, authCustomer, userCtrl.profile);

//cập nhập profile khách hàng
router.patch('/profile/update', auth, authCustomer, userCtrl.updateProfile);

//thay đổi mật khẩu
router.patch('/changePassword', auth, authCustomer, userCtrl.ChangePassword);

//quên mật khẩu
router.post('/forget', userCtrl.forgetPasswordCustomer);

//link reset mật khẩu khi quên mật khẩu
router.put('/password/reset/:token', userCtrl.resetPassword);

//đăng nhập gg chưa sửa
// router.post('/loginGoogle', userCtrl.LoginGoogle);

module.exports = router;
