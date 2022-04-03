const Directors = require('../Model/directorModel');

const directorCtrl = {
  //Xem thông tin của tất cả đạo diễn
  async getAllDirector(req, res) {
    try {
      const all_director = await Directors.find({});
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Get all directors successfully',
        data: all_director,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get all directors',
      });
    }
  },

  //Xem thông tin chi tiết của đạo diễn
  async getDetailDirector(req, res) {
    try {
      const id = req.params.id;
      const director = await Directors.find({ _id: id });
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Get detail director successfully',
        data: director,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get detail director',
      });
    }
  },

  //thêm thông tin đạo diễn
  async addDirector(req, res) {
    try {
      const { name, image, description } = req.body;

      const newDirector = new Directors({
        name,
        image,
        description,
      });

      //save mongodb
      await newDirector.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Added director successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to add director',
      });
    }
  },

  //Chỉnh sửa thông tin đạo diễn
  async updateDirectorInfo(req, res) {
    try {
      const { name, image, description } = req.body;
      const id = req.params.id;
      await Directors.findByIdAndUpdate(
        { _id: id },
        {
          name: name,
          image: image,
          description: description,
          updatedAt: Date.now,
        }
      );

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Updated director info successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to update director info',
      });
    }
  },

  //Xóa thông tin đạo diễn
  async deleteDirector(req, res) {
    try {
      const id = req.params.id;
      await Directors.findByIdAndDelete({ _id: id });
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Deleted director successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to delete director',
      });
    }
  },
};

module.exports = directorCtrl;
