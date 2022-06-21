const Users = require("../Model/userModel");
const Bills = require("../Model/billModel");

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

  //Thống kê doanh thu từng tháng trong năm
  async statisticsMonthlyRevenue(req, res) {
    try {
      const monthly = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      const year_now = new Date().getFullYear();

      var statistics = await Bills.aggregate([
        {
          $project: {
            month: { $month: "$date_purchase" },
            year: { $year: "$date_purchase" },
            price: 1,
          },
        },
        {
          $match: {
            month: { $in: monthly },
            year: { $eq: year_now },
          },
        },
        {
          $group: {
            // _id: {
            //   month: "$month",
            // },
            _id: "$month",
            revenue: { $sum: "$price" },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      var monthlyRevenue = [];

      for (let i = 0; i < statistics.length; i++) {
        if (monthly.includes(statistics[i]._id)) {
          var index = monthly.indexOf(statistics[i]._id);
          monthly.splice(index, 1);
        }
      }

      var missing_statistics = [];
      for (let i = 0; i < monthly.length; i++) {
        missing_statistics.push({
          _id: monthly[i],
          revenue: 0,
        });
      }

      monthlyRevenue = statistics.concat(missing_statistics);

      return res.json({
        status: 200,
        success: true,
        msg: "Statistics monthly revenue successfully",
        data: monthlyRevenue,
      });
    } catch (error) {
      console.log(error.message);
      return res.json({
        status: 400,
        success: false,
        msg: "Failed to get monthly revenue",
      });
    }
  },
};

module.exports = staticticsCtrl;
