const Films = require('../Model/filmModel.js');

const filmCtrl = {
  //Xem thông tin của tất cả bộ phim
  async getAllFilm(req, res) {
    try {
      const data = await Films.find({})
        .populate('director')
        .populate('category')
        .populate('seriesFilm');
      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: 'Get all films successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: err.message,
      });
    }
  },

  //thêm 1 bộ phim
  async addFilm(req, res) {
    try {
      const {
        title,
        description,
        date_production,
        image_film,
        video_film,
        director,
        category,
        seriesFilm,
      } = req.body;

      const newFilm = new Films({
        title,
        description,
        date_production,
        image_film,
        video_film,
        director,
        category,
        seriesFilm,
      });

      //save mongodb
      await newFilm.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Added film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: err.message,
      });
    }
  },
};

module.exports = filmCtrl;
