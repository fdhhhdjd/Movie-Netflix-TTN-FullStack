const express = require('express');
const filmCtrl = require('../Controllers/filmController.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const router = express.Router();

//Xem thông tin tất cả bộ phim
router.get('/all', auth, filmCtrl.getAllFilm);

//Thêm thông tin bộ phim
router.post('/add', auth, authAdmin, filmCtrl.addFilm);

//Chỉnh sửa thông tin bộ phim
router.patch('/update/:id', auth, authAdmin, filmCtrl.updateFilm);

//Xóa bộ phim
router.delete('/delete/:id', auth, authAdmin, filmCtrl.deleteFilm);

//Xem thông tin chi tiết bộ phim
router.get('/detail/:id', auth, filmCtrl.getDetailFilm);

//lấy ra những bộ phim theo thể loại
router.get('/find/category/:id', auth, filmCtrl.getFilmByCategory);

//lấy ra những bộ phim theo đạo diễn
router.get('/find/director/:id', auth, filmCtrl.getFilmByDirector);

module.exports = router;
