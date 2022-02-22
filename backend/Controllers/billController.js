const Bills = require("../Model/billModel.js");
const Films = require("../Model/filmModel");
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

  //Mua 1 bộ phim
  async purchaseFilm(req, res) {
    try {
      const userId = req.user.id;
      const filmId = req.params.filmId;
      const { mode_of_payment, id_payment } = req.body;

      //Kiểm tra trong bill của người dùng này đã mua bộ phim này chưa
      const boughtFilm = await Bills.findOne({
        user: userId,
        film: filmId,
      });

      if (boughtFilm) {
        return res.status(400).json({
          status: 400,
          success: false,
          msg: "You have purchased this film",
        });
      }

      const film = await Films.findById({ _id: filmId }).select("title price");
      if (!film) {
        return res.status(400).json({
          status: 400,
          success: false,
          msg: "Not found film",
        });
      }

      const newBill = new Bills({
        user: userId,
        film: filmId,
        price: film.price,
        mode_of_payment,
        id_payment,
      });

      await newBill.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Purchased film success",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Faild to purchase",
      });
    }
  },

  //Kiểm tra bộ phim này có xem được không
  async checkWatchFilm(req, res) {
    try {
      const filmId = req.params.filmId;
      const userId = req.user.id;
      const purchased = await Bills.findOne({
        film: filmId,
        user: userId,
      });

      if (!purchased) {
        return res.status(400).json({
          status: 400,
          succes: false,
          msg: "You must purchase to see this film ",
          canWatch: false,
        });
      }

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "You can watch film",
        canWatch: true,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        succes: true,
        msg: "Checked fail",
        canWatch: false,
      });
    }
  },
};

module.exports = billCtrl;
