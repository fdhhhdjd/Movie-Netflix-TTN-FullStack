const router = require('express').Router();
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const authCustomer = require('../middleware/authCustomer.js');
const commentCtrl = require('../Controllers/commentController.js');

//Xem tất cả bình luận
router.get('/all', auth, authAdmin, commentCtrl.getAllComment);

//Xem bình luận của 1 bộ phim
router.get('/get/:filmId', auth, authCustomer, commentCtrl.getCommentsOfFilm);

//Bình luận bộ phim
router.post('/add/:filmId', auth, authCustomer, commentCtrl.commentFilm);

//Chỉnh sửa bình luận
router.patch('/update/:id', auth, authCustomer, commentCtrl.updateComment);

//Xóa bình luận
router.delete('/delete/:id', auth, authCustomer, commentCtrl.deleteComment);

module.exports = router;
