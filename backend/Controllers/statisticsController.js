const Users = require("../Model/userModel");

const staticticsCtrl = {
  //Thống kê những người dùng đăng ký gần đây
  async statisticsOfRecentlyRegisteredUsers(req, res) {
    try {
      const get_day_of_time = (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
      };
      const now = new Date();

      var users = await Users.find({ role: 0, verified: true });

      var recentlyRegisteredUsers = [];

      for (let i = 0; i < users.length; i++) {
        var days = get_day_of_time(users[i].createdAt, now);
        if (days <= 3) {
          recentlyRegisteredUsers.push(users[i]);
        }
      }

      return res.json({
        status: 200,
        success: true,
        msg: "Statistics recently registered users successfully",
        data: recentlyRegisteredUsers,
      });
    } catch (error) {
      console.log(error.message);
      return res.json({
        status: 400,
        success: false,
        msg: "Failed to statistics of recently registered users",
      });
    }
  },
};

module.exports = staticticsCtrl;
