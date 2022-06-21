const router = require("express").Router();
const staticticsCtrl = require("../Controllers/statisticsController");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

//thống kê người dùng đăng ký gần đây
router.get(
  "/registeredUser/recently",
  auth,
  authAdmin,
  staticticsCtrl.statisticsOfRecentlyRegisteredUsers
);

//thống kê doanh thu theo từng tháng
router.get(
  "/revenue/monthly",
  auth,
  authAdmin,
  staticticsCtrl.statisticsMonthlyRevenue
);

module.exports = router;
