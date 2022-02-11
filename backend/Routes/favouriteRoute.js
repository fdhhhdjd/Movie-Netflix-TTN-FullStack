const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const authCustomer = require('../middleware/authCustomer.js');
const favouriteCtrl = require('../Controllers/favouriteController.js');

//Lấy ra hết bộ phim yêu thích
router.get('/all', auth, authAdmin, favouriteCtrl.getAllListFavourite);

//Lấy ra danh sách bộ phim yêu thích
router.get(
  '/getList',
  auth,
  authCustomer,
  favouriteCtrl.getFavouriteListOfUser
);

//Thêm bộ phim vào danh sách yêu thích
router.post(
  '/add/:filmId',
  auth,
  authCustomer,
  favouriteCtrl.addFilmIntoFavouriteList
);

//Xóa bộ phim khỏi danh sách yêu thích
router.delete(
  '/delete/:id',
  auth,
  authCustomer,
  favouriteCtrl.removeFilmFromListFavourite
);

module.exports = router;
