const express = require('express');
const seriesFilmCtrl = require('../Controllers/seriesFilmController.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const router = express.Router();

//Xem tất cả tập phim
router.get('/all', auth, seriesFilmCtrl.getAllSeriesFilm);

//Tạo thêm 1 tập phim
router.post('/add', auth, authAdmin, seriesFilmCtrl.addSeriesFilm);

//Chỉnh sửa tập phim
router.put('/update/:id', auth, authAdmin, seriesFilmCtrl.updateSeriesFilm);

//Xóa tập phim
router.delete('/delete/:id', auth, authAdmin, seriesFilmCtrl.deleteSeriesFilm);

module.exports = router;
