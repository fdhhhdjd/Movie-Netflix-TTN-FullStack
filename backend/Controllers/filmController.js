const Films = require('../Model/filmModel.js');
const Ratings = require('../Model/ratingModel.js');

const filmCtrl = {
  //Xem thông tin của tất cả bộ phim
  async getAllFilm(req, res) {
    try {
      const data = await Films.find({})
        .populate('director')
        .populate('category');
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
        .populate('category');
      const rating = await Ratings.find({ film: id });
      var avg_score = 0;
      for (var i = 0; i < rating.length; i++) {
        avg_score += rating[i].score;
      }
      if (avg_score == 0 && rating.length == 0) {
        avg_score = 0;
      } else {
        avg_score = (avg_score / rating.length).toFixed(1);
      }

      return res.status(200).json({
        status: 200,
        success: true,
        data,
        avg_score: avg_score,
        numRatings: rating.length,
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
        .populate('category');

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
        .populate('category');

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
        year_production,
        country_production,
        image_film,
        director,
        category,
        seriesFilm,
        ageLimit,
        filmLength,
        price,
      } = req.body;

      const newFilm = new Films({
        title,
        description,
        year_production,
        country_production,
        image_film,
        director,
        category,
        seriesFilm,
        ageLimit,
        filmLength,
        price,
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
        year_production,
        country_production,
        image_film,
        director,
        category,
        seriesFilm,
        price,
        ageLimit,
        filmLength,
      } = req.body;

      await Films.findByIdAndUpdate(
        { _id: id },
        {
          title,
          description,
          year_production,
          country_production,
          image_film,
          director,
          category,
          seriesFilm,
          price,
          ageLimit,
          filmLength,
          updatedAt: Date.now,
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
