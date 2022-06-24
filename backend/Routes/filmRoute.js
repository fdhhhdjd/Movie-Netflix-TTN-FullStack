const express = require("express");
const filmCtrl = require("../Controllers/filmController.js");
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");
const authCustomer = require("../middleware/authCustomer");
const router = express.Router();

//Lựa chọn bộ phim dành cho trẻ em hay người lớn
router.post(
  "/selectForAdultOrChild",
  auth,
  authCustomer,
  filmCtrl.selectFilmForKidOrAdult
);

//Danh sách phim dành cho người lớn
router.get("/adult", auth, filmCtrl.getFilmForAdult);

//Danh sách phim dành cho trẻ em
router.get("/kid", auth, filmCtrl.getFilmForKid);

//Thoát khỏi chế độ cho trẻ em
router.post("/kid/exit", auth, authCustomer, filmCtrl.exitKidMode);

//Xem thông tin tất cả bộ phim
router.get("/all", auth, filmCtrl.getAllFilm);

//Thêm thông tin bộ phim
router.post("/add", auth, authAdmin, filmCtrl.addFilm);

//Thêm một tập phim
router.post("/:id/addEpisode", auth, authAdmin, filmCtrl.addEpisodeOfFilm);

//Chỉnh sửa thông tin bộ phim
router.patch("/update/:id", auth, authAdmin, filmCtrl.updateFilm);

//Chỉnh sửa tập phim
router.patch(
  "/update/:filmId/updateEpisode/:episodeId",
  auth,
  authAdmin,
  filmCtrl.updateEpisodeOfFilm
);

//Xóa bộ phim
router.delete("/delete/:id", auth, authAdmin, filmCtrl.deleteFilm);

//Xóa 1 tập phim
router.delete(
  "/delete/:filmId/deleteEpisode/:episodeId",
  auth,
  authAdmin,
  filmCtrl.deleteEpisodeOfFilm
);

//Xem thông tin chi tiết bộ phim
router.get("/detail/:id", auth, filmCtrl.getDetailFilm);

//lấy ra những bộ phim người lớn theo từng thể loại
router.get("/adult/eachCategory", auth, filmCtrl.getAdultFilmByEachCategory);

//lấy ra những bộ phim trẻ em theo từng thể loại
router.get("/kid/eachCategory", auth, filmCtrl.getKidFilmByEachCategory);

//lấy ra những bộ phim theo đạo diễn
router.get("/find/director/:id", auth, filmCtrl.getFilmByDirector);

//danh sách film theo categoryId
router.get("/find/category/:categoryId", auth, filmCtrl.getFilmByCategoryId);

module.exports = router;
