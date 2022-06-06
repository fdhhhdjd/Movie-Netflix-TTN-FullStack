const router = require("express").Router();
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");
const authCustomer = require("../middleware/authCustomer.js");
const billCtrl = require("../Controllers/billController.js");

//Xem toàn bộ hóa đơn
router.get("/all", auth, authAdmin, billCtrl.getAllBill);

//Xem lịch sử hóa đơn mua phim
router.get("/history", auth, authCustomer, billCtrl.getHistoryBill);

// //Mua 1 bộ phim
// router.post("/create/:filmId", auth, authCustomer, billCtrl.purchaseFilm);

// //Kiểm tra người dùng có thể xem phim được không
// router.get(
//   "/checkWatchFilm/:filmId",
//   auth,
//   authCustomer,
//   billCtrl.checkWatchFilm
// );

module.exports = router;
