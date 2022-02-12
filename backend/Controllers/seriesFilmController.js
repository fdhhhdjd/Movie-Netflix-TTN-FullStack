const SeriesFilms = require('../Model/seriesFilmModel.js');

const seriesFilmCtrl = {
  //Xem tất cả các tập phim
  async getAllSeriesFilm(req, res) {
    try {
      const data = await SeriesFilms.find({});
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Get all series film successfully',
        data: data,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get all series film',
      });
    }
  },

  //Tạo thêm 1 tập phim
  async addSeriesFilm(req, res) {
    try {
      const { name } = req.body;
      const newSeriesFilm = new SeriesFilms({
        name,
      });

      //save mongodb
      await newSeriesFilm.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Added series film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to add series film',
      });
    }
  },

  //Chỉnh sửa tập phim
  async updateSeriesFilm(req, res) {
    try {
      const { name } = req.body;
      const id = req.params.id;
      await SeriesFilms.findByIdAndUpdate(
        { _id: id },
        {
          name: name,
          updatedAt: Date.now,
        }
      );

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Updated series film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to update series film',
      });
    }
  },

  //Xóa tập phim
  async deleteSeriesFilm(req, res) {
    try {
      const id = req.params.id;
      await SeriesFilms.findByIdAndDelete({ _id: id });
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Deleted series film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to delete series film',
      });
    }
  },
};

module.exports = seriesFilmCtrl;
