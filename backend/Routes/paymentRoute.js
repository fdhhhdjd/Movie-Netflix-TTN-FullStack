const router = require('express').Router();
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const paymentCtrl = require('../Controllers/paymentController.js');

//Xem tất cả hình thức thanh toán
router.get('/all', auth, paymentCtrl.getAllModeOfPayment);

//Xem thông tin chi tiết hình thức thanh toán
router.get('/:id', auth, paymentCtrl.getDetailModeOfPayment);

//Thêm 1 hình thức thanh toán mới
router.post('/add', auth, authAdmin, paymentCtrl.addModeOfPayment);

//Chỉnh sửa hình thức thanh toán
router.patch('/update/:id', auth, authAdmin, paymentCtrl.updateModeOfPayment);

//Xóa hình thức thanh toán
router.delete('/delete/:id', auth, authAdmin, paymentCtrl.deleteModeOfPayment);

module.exports = router;
