const router = require("express").Router();
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");
const authCustomer = require("../middleware/authCustomer.js");
const commentCtrl = require("../Controllers/commentController.js");

//Xem tất cả bình luận
router.get("/all", auth, authAdmin, commentCtrl.getAllComment);

//Xem bình luận của 1 bộ phim
router.get("/get/:filmId", auth, commentCtrl.getCommentsOfFilm);

//Bình luận bộ phim
router.post("/add/:filmId", auth, authCustomer, commentCtrl.commentFilm);

//Chỉnh sửa bình luận
router.patch("/update/:id", auth, authCustomer, commentCtrl.updateComment);

//Xóa mềm bình luận
router.patch(
  "/softDelete/:id",
  auth,
  authCustomer,
  commentCtrl.softDeleteComment
);

//Lấy bình luận khách hàng đã xóa trong thùng rác
router.get("/bin", auth, authAdmin, commentCtrl.getRecycleBinOfDeletedComment);

//Khôi phục lại comment đã bị xóa
router.patch("/:id/restore", auth, authAdmin, commentCtrl.restoreCommentInBin);

//Tự động xóa comment nếu ở trong thùng rác quá 7 ngày
router.delete(
  "/bin/delete",
  auth,
  authAdmin,
  commentCtrl.autoDeleteCommentFromBin
);

module.exports = router;
