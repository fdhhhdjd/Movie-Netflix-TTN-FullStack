const express = require('express');
const filmCtrl = require('../Controllers/filmController.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const router = express.Router();

//Xem thông tin tất cả bộ phim
router.get('/all', auth, filmCtrl.getAllFilm);

//Thêm thông tin bộ phim
router.post('/add', auth, authAdmin, filmCtrl.addFilm);

//Thêm một tập phim
router.post('/:id/addEpisode', auth, authAdmin, filmCtrl.addEpisodeOfFilm);

//Chỉnh sửa thông tin bộ phim
router.patch('/update/:id', auth, authAdmin, filmCtrl.updateFilm);

//Chỉnh sửa tập phim
router.patch(
  '/update/:filmId/updateEpisode/:episodeId',
  auth,
  authAdmin,
  filmCtrl.updateEpisodeOfFilm
);

//Xóa bộ phim
router.delete('/delete/:id', auth, authAdmin, filmCtrl.deleteFilm);

//Xóa 1 tập phim
router.delete(
  '/delete/:filmId/deleteEpisode/:episodeId',
  auth,
  authAdmin,
  filmCtrl.deleteEpisodeOfFilm
);

//Xem thông tin chi tiết bộ phim
router.get('/detail/:id', auth, filmCtrl.getDetailFilm);

//lấy ra những bộ phim theo thể loại
router.get('/find/category/:id', auth, filmCtrl.getFilmByCategory);

//lấy ra những bộ phim theo đạo diễn
router.get('/find/director/:id', auth, filmCtrl.getFilmByDirector);

module.exports = router;
