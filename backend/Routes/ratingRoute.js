const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const authCustomer = require('../middleware/authCustomer.js');
const ratingCtrl = require('../Controllers/ratingController.js');

//Xem đánh giá toàn bộ người dùng
router.get('/all', auth, authAdmin, ratingCtrl.getAllRating);

//Đánh giá sao cho bộ phim
router.post('/add/:filmId', auth, authCustomer, ratingCtrl.ratingFilm);

//Xóa toàn bộ đánh giá
router.delete('/delete/all', auth, authAdmin, ratingCtrl.deleteAllRating);

module.exports = router;
