const router = require("express").Router();
const auth = require("../middleware/auth.js");
const authAdmin = require("../middleware/authAdmin.js");
const modeOfPaymentCtrl = require("../Controllers/modeOfPaymentController.js");

//Xem tất cả hình thức thanh toán
router.get("/all", auth, modeOfPaymentCtrl.getAllModeOfPayment);

//Xem thông tin chi tiết hình thức thanh toán
router.get("/:id", auth, modeOfPaymentCtrl.getDetailModeOfPayment);

//Thêm 1 hình thức thanh toán mới
router.post("/add", auth, authAdmin, modeOfPaymentCtrl.addModeOfPayment);

//Chỉnh sửa hình thức thanh toán
router.patch(
  "/update/:id",
  auth,
  authAdmin,
  modeOfPaymentCtrl.updateModeOfPayment
);

//Xóa hình thức thanh toán
router.delete(
  "/delete/:id",
  auth,
  authAdmin,
  modeOfPaymentCtrl.deleteModeOfPayment
);

module.exports = router;
