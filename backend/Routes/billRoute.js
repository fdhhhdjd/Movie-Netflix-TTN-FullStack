const router = require("express").Router();
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");
const authCustomer = require("../middleware/authCustomer.js");
const billCtrl = require("../Controllers/billController.js");

//Xem toàn bộ hóa đơn
router.get("/all", auth, authAdmin, billCtrl.getAllBill);

//Xem lịch sử hóa đơn mua phim
router.get("/history", auth, authCustomer, billCtrl.getHistoryBill);

//Tạo hóa đơn Paypal
router.post("/Paypal/create/", auth, authCustomer, billCtrl.createPaypalBill);

//Kiểm tra người dùng có thể xem phim được không
router.get(
  "/checkCanWatchFilm/:filmId",
  auth,
  authCustomer,
  billCtrl.checkCanWatchFilm
);

//Lấy ra danh sách bill theo mã khách hàng
router.get("/:userId/listBill", auth, authAdmin, billCtrl.getListBillByUserId);

module.exports = router;
