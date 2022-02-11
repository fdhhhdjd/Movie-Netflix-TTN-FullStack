const Films = require('../Model/filmModel.js');
const mongoose = require('mongoose');

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
        msg: 'Failed to get all films',
      });
    }
  },

  //Xem thông tin chi tiết của 1 bộ phim
  async getDetailFilm(req, res) {
    try {
      const id = req.params.id;
      const data = await Films.find({ _id: id })
        .populate('director')
        .populate('category')
        .populate('seriesFilm');
      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: 'Get detail film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get detail film',
      });
    }
  },

  //Tìm kiếm bộ phim theo thể loại
  async getFilmByCategory(req, res) {
    try {
      const categoryId = req.params.id;

      const data = await Films.find({
        // category: mongoose.Types.ObjectId(categoryId),
        category: categoryId,
      })
        .populate('director')
        .populate('category')
        .populate('seriesFilm');

      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: 'Get film by category successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get film by category',
      });
    }
  },

  //Tìm kiếm bộ phim theo đạo diễn
  async getFilmByDirector(req, res) {
    try {
      const directorId = req.params.id;

      const data = await Films.find({
        director: directorId,
      })
        .populate('director')
        .populate('category')
        .populate('seriesFilm');

      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: 'Get film by director successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get film by director',
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
        msg: 'Failed to add film',
      });
    }
  },

  //chỉnh sửa thông tin bộ phim
  async updateFilm(req, res) {
    try {
      const id = req.params.id;
      const {
        title,
        description,
        date_production,
        image_film,
        video_film,
        director,
        category,
        seriesFilm,
        price,
      } = req.body;

      await Films.findByIdAndUpdate(
        { _id: id },
        {
          title,
          description,
          date_production,
          image_film,
          video_film,
          director,
          category,
          seriesFilm,
          price,
        }
      );

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Updated film successfully',
      });
    } catch (err) {
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Failed to update film',
      });
    }
  },

  //Xóa 1 bộ phim
  async deleteFilm(req, res) {
    try {
      const id = req.params.id;

      await Films.findByIdAndDelete({ _id: id });

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Deleted film successfully',
      });
    } catch (err) {
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Failed to delete film',
      });
    }
  },
};

module.exports = filmCtrl;
