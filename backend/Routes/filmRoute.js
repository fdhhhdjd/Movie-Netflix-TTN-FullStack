const express = require('express');
const filmCtrl = require('../Controllers/filmController.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const router = express.Router();

//Xem thông tin tất cả bộ phim
router.get('/all', auth, filmCtrl.getAllFilm);

//Thêm thông tin bộ phim
router.post('/add', auth, authAdmin, filmCtrl.addFilm);

module.exports = router;
