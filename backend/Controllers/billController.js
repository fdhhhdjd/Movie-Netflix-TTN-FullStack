const Bills = require("../Model/billModel.js");
const Films = require("../Model/filmModel");
const Users = require("../Model/userModel");
const dotenv = require("dotenv");
dotenv.config();

const billCtrl = {
  //Lấy ra toàn bộ bill
  async getAllBill(req, res) {
    try {
      const bills = await Bills.find({})
        .populate("user")
        .populate("mode_of_payment")
        .populate("film");

      return res.status(200).json({
        status: 200,
        succes: true,
        msg: "Get all bills successfully",
        bills,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get all bills",
      });
    }
  },

  //Xem lịch sử mua phim
  async getHistoryBill(req, res) {
    try {
      const userId = req.user.id;
      const history = await Bills.find({
        user: userId,
      })
        .populate("user")
        .populate("mode_of_payment")
        .populate("film");

      return res.status(200).json({
        status: 200,
        succes: true,
        msg: "Get history bills successfully",
        history,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get history bills",
        error,
      });
    }
  },

  //Tạo hóa đơn paypal
  async createPaypalBill(req, res) {
    try {
      const userId = req.user.id;
      const { mode_of_payment, id_payment, filmId, price } = req.body;

      const newBill = new Bills({
        user: userId,
        film: filmId,
        price,
        mode_of_payment,
        id_payment,
      });

      await newBill.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Purchased film success, you can watch this film",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to purchase",
      });
    }
  },

  //Kiểm tra bộ phim này có xem được không
  async checkCanWatchFilm(req, res) {
    try {
      const filmId = req.params.filmId;
      const userId = req.user.id;

      //kiểm tra phim này có miễn phí không
      const freeFilm = await Films.findOne({ _id: filmId, price: { $eq: 0 } });

      //nếu miễn phí thì người dùng được xem phim
      if (freeFilm) {
        return res.status(200).json({
          status: 200,
          success: true,
          msg: "You can watch film",
          canWatch: true,
        });
      } else {
        //nếu phim mất phí thì kiểm tra trong các hóa đơn mua phim của người dùng đang đăng nhập đã mua phim này chưa
        const purchased = await Bills.findOne({
          film: filmId,
          user: userId,
        });

        //nếu chưa mua phim thì bắt người dùng phải mua
        if (!purchased) {
          return res.status(200).json({
            status: 200,
            succes: true,
            msg: "Please purchase to watch this film",
            canWatch: false,
          });
        } else {
          //nếu đã mua rồi thì có thể xem phim
          return res.status(200).json({
            status: 200,
            success: true,
            msg: "You can watch film",
            canWatch: true,
          });
        }
      }
    } catch (error) {
      return res.status(400).json({
        status: 400,
        succes: true,
        msg: "Check failed",
        error: error.message,
        canWatch: false,
      });
    }
  },

  //lấy ra ds bill theo id khách hàng
  async getListBillByUserId(req, res) {
    try {
      const userId = req.params.userId;
      let listBills = await Bills.find({ user: userId })
        .populate("user")
        .populate("film")
        .populate("mode_of_payment");

      return res.json({
        status: 200,
        success: true,
        msg: `Get list bill by userId (${userId}) successfully`,
        data: listBills,
      });
    } catch (error) {
      console.log(error.message);
      return res.json({
        status: 400,
        success: false,
        msg: "Failed to get list bill by userId",
      });
    }
  },
};

module.exports = billCtrl;
