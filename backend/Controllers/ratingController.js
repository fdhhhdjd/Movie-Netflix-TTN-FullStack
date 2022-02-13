const Ratings = require('../Model/ratingModel.js');

const ratingCtrl = {
  async getAllRating(req, res) {
    try {
      const ratings = await Ratings.find({}).populate('user').populate('film');

      return res.status(200).json({
        status: 200,
        success: true,
        msg: `Get all ratings successfully`,
        data: ratings,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get all ratings',
      });
    }
  },

  //Đánh giá sao cho bộ phim
  async ratingFilm(req, res) {
    try {
      const userId = req.user.id;
      const filmId = req.params.filmId;
      const { score } = req.body;

      const rated = await Ratings.findOne({ user: userId, film: filmId });
      if (rated) {
        return res.json({
          status: 400,
          success: false,
          msg: 'You have already rated',
        });
      }

      const newRating = new Ratings({
        user: userId,
        film: filmId,
        score,
      });

      await newRating.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Rated film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to rate film',
      });
    }
  },

  async deleteAllRating(req, res) {
    try {
      await Ratings.deleteMany({});
      return res.json('success');
    } catch (err) {
      console.log(err);
    }
  },

  // //Lấy ra điểm đánh giá trung bình và số lượt đánh giá của bộ phim
  // async getAvgScoreAndNumRating(req, res) {
  //   try {
  //     const filmId = req.params.filmId;
  //     const data = await Ratings.find({ film: filmId });
  //     var avg_score = 0;
  //     for (var i = 0; i < data.length; i++) {
  //       avg_score += data[i].score;
  //     }
  //     avg_score = (avg_score / data.length).toFixed(1);
  //     return res.status(200).json({
  //       status: 200,
  //       success: true,
  //       msg: 'Get avg score and num ratings of film successfully',
  //       avg_score,
  //       numRatings: data.length,
  //     });
  //   } catch (err) {
  //     return res.status(400).json({
  //       status: 400,
  //       success: false,
  //       msg: 'Failed to get avg score and num ratings',
  //     });
  //   }
  // },
};

module.exports = ratingCtrl;
