const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");
const authCustomer = require("../middleware/authCustomer.js");
const favouriteCtrl = require("../Controllers/favouriteController.js");

//Lấy ra hết bộ phim yêu thích
router.get("/all", auth, authAdmin, favouriteCtrl.getAllListFavourite);

//Lấy ra danh sách bộ phim yêu thích
router.get(
  "/getList",
  auth,
  authCustomer,
  favouriteCtrl.getFavouriteListOfUser
);

//Thêm và xóa bộ phim trong danh sách yêu thích
router.post(
  "/add/:filmId",
  auth,
  authCustomer,
  favouriteCtrl.addAndRemoveFilmInFavouriteList
);

//Xóa toàn bộ trong danh sách yêu thích
router.delete(
  "/delete/",
  auth,
  authCustomer,
  favouriteCtrl.removeAllFromListFavourite
);

module.exports = router;
