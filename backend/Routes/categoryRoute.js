const express = require('express');
const categoryCtrl = require('../Controllers/categoryController.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const router = express.Router();

//Xem tất cả thể loại phim
router.get('/all', auth, categoryCtrl.getAllCategory);

//Tạo thêm 1 thể loại phim
router.post('/add', auth, authAdmin, categoryCtrl.addCategory);

//Chỉnh sửa thể loại phim
router.put('/update/:id', auth, authAdmin, categoryCtrl.updateCategory);

//Xóa thể loại phim
router.delete('/delete/:id', auth, authAdmin, categoryCtrl.deleteCategory);

module.exports = router;
