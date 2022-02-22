const ModeOfPayments = require("../Model/modeOfPaymentModel.js");

const modeOfPaymentCtrl = {
  //Xem tất cả hình thức thanh toán
  async getAllModeOfPayment(req, res) {
    try {
      const data = await ModeOfPayments.find({});
      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get all mode of payments successfully",
        data,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get all mode of payments",
      });
    }
  },

  //Xem chi tiết hình thức thanh toán
  async getDetailModeOfPayment(req, res) {
    try {
      const id = req.params.id;
      const director = await ModeOfPayments.find({ _id: id });
      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get detail mode of payment successfully",
        data: director,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get detail mode of payment",
      });
    }
  },

  //Thêm hình thức thanh toán
  async addModeOfPayment(req, res) {
    try {
      const { name, image } = req.body;
      if (!image) {
        return res.status(400).json({
          status: 400,
          success: false,
          msg: "No Image Selected",
        });
      }

      const newPayment = new ModeOfPayments({
        name,
        image,
      });

      //save in mongodb
      await newPayment.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Created new mode of payment successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed create new mode of payment",
      });
    }
  },

  //Chỉnh sửa hình thức thanh toán
  async updateModeOfPayment(req, res) {
    try {
      const { name, image } = req.body;
      const id = req.params.id;
      await ModeOfPayments.findByIdAndUpdate(
        { _id: id },
        {
          name: name,
          image: image,
          updatedAt: Date.now,
        }
      );

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Updated mode of payment successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to update mode of payment",
      });
    }
  },

  //Xóa hình thức thanh toán
  async deleteModeOfPayment(req, res) {
    try {
      const id = req.params.id;
      await ModeOfPayments.findByIdAndDelete({ _id: id });
      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Deleted mode of payment successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to delete mode of payment",
      });
    }
  },
};

module.exports = modeOfPaymentCtrl;
