const express = require('express');
const directorCtrl = require('../Controllers/directorController');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const authCustomer = require('../middleware/authCustomer.js');
const router = express.Router();

//Xem thông tin tất cả đạo diễn
router.get('/all', auth, directorCtrl.getAllDirector);

//Xem thông tin chi tiết đạo diễn
router.get('/:id', auth, directorCtrl.getDetailDirector);

//Thêm mới thông tin đạo diễn (admin)
router.post('/add', auth, authAdmin, directorCtrl.addDirector);

//Chỉnh sửa thông tin đạo diễn (admin)
router.patch('/update/:id', auth, authAdmin, directorCtrl.updateDirectorInfo);

//Xóa thông tin đạo diễn
router.delete('/delete/:id', auth, authAdmin, directorCtrl.deleteDirector);

module.exports = router;
