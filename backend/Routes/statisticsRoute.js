const router = require("express").Router();
const staticticsCtrl = require("../Controllers/statisticsController");

//thống kê người dùng đăng ký gần đây
router.get(
  "/registeredUser/recently",
  staticticsCtrl.statisticsOfRecentlyRegisteredUsers
);

module.exports = router;
