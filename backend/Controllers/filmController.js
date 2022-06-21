const Films = require("../Model/filmModel.js");
const Ratings = require("../Model/ratingModel.js");
const Users = require("../Model/userModel");
const Categories = require("../Model/categoryModel.js");
const bcrypt = require("bcrypt");
const filmCtrl = {
  //lựa chọn bộ phim cho người lớn hay trẻ em
  async selectFilmForKidOrAdult(req, res) {
    try {
      const { adult } = req.body;
      const userId = req.user.id;
      await Users.findByIdAndUpdate({ _id: userId }, { adult }, { new: true });

      return res.json({
        status: 200,
        success: true,
        msg: adult,
      });
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        msg: error.message,
      });
    }
  },

  //Lấy ra danh sách phim dành cho người lớn
  async getFilmForAdult(req, res) {
    try {
      const adultFilms = await Films.find({ ageLimit: { $gte: 16 } })
        .populate("director")
        .populate("category")
        .populate("seriesFilm");
      return res.json({
        status: 200,
        success: true,
        msg: "Get films for adult successfully",
        data: adultFilms,
      });
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        msg: error.message,
      });
    }
  },

  //Lấy ra danh sách phim dành cho trẻ em
  async getFilmForKid(req, res) {
    try {
      const kidFilms = await Films.find({ ageLimit: { $lt: 16 } })
        .populate("director")
        .populate("category")
        .populate("seriesFilm");
      return res.json({
        status: 200,
        success: true,
        msg: "Get films for kid successfully",
        data: kidFilms,
      });
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        msg: error.message,
      });
    }
  },

  //thoát chế độ xem phim dành cho trẻ em
  async exitKidMode(req, res) {
    try {
      const userId = req.user.id;
      const { i_password } = req.body;
      const user = await Users.findById(userId).select("password");
      const isMatch = await bcrypt.compare(i_password, user.password);
      if (isMatch) {
        return res.json({
          status: 200,
          success: true,
          msg: "Exited kid mode successfully",
        });
      } else {
        return res.json({
          status: 400,
          success: false,
          msg: "Incorrect password",
        });
      }
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        msg: error.message,
      });
    }
  },

  //Xem thông tin của tất cả bộ phim
  async getAllFilm(req, res) {
    try {
      const data = await Films.find({})
        .populate("director")
        .populate("category")
        .populate("seriesFilm");
      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: "Get all films successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get all films",
      });
    }
  },

  //Xem thông tin chi tiết của 1 bộ phim
  async getDetailFilm(req, res) {
    try {
      const id = req.params.id;
      const data = await Films.find({ _id: id })
        .populate("director")
        .populate("category")
        .populate("seriesFilm");
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
        msg: "Get detail film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get detail film",
      });
    }
  },

  async getAdultFilmByEachCategory(req, res) {
    try {
      const listAdultFilms = await Films.find({});

      var listCategories = [];

      listAdultFilms.forEach((film) => {
        listCategories.push(film.category);
      });

      listCategories = listCategories.flat();

      var listAdultCategories = listCategories.map((category) => {
        return category.toString();
      });

      //Hien thi mang chua cac the loai cua phim nguoi lon
      //Loai bo phan tu trung trong mang
      listAdultCategories = [...new Set(listAdultCategories)];

      var results = [];

      for (var i = 0; i < listAdultCategories.length; i++) {
        var category = await Categories.findById(listAdultCategories[i]).select(
          "name"
        );

        var listFilms = await Films.find({
          category: { $elemMatch: { $eq: listAdultCategories[i] } },
        })
          .populate("director")
          .populate("category")
          .populate("seriesFilm");

        var result = {
          category: category.name,
          data: listFilms,
        };

        results.push(result);
      }

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get adult films by each category successfully",
        results,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get film by category",
      });
    }
  },

  //Hiển thị phim dành cho trẻ em theo từng thể loại
  async getKidFilmByEachCategory(req, res) {
    try {
      const listKidFilms = await Films.find({
        ageLimit: { $lt: 16 },
      });

      var listCategories = [];

      listKidFilms.forEach((film) => {
        listCategories.push(film.category);
      });

      listCategories = listCategories.flat();

      var listKidCategories = listCategories.map((category) => {
        return category.toString();
      });

      //Hien thi mang chua cac the loai cua phim tre em
      //Loai bo phan tu trung trong mang
      listKidCategories = [...new Set(listKidCategories)];

      var results = [];

      for (var i = 0; i < listKidCategories.length; i++) {
        var category = await Categories.findById(listKidCategories[i]).select(
          "name"
        );

        var listFilms = await Films.find({
          ageLimit: { $lt: 16 },
          category: { $elemMatch: { $eq: listKidCategories[i] } },
        })
          .populate("director")
          .populate("category")
          .populate("seriesFilm");

        var result = {
          category: category.name,
          data: listFilms,
        };

        results.push(result);
      }

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get kid films by each category successfully",
        results,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get kid films by each category",
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
        .populate("director")
        .populate("category")
        .populate("seriesFilm");

      return res.status(200).json({
        status: 200,
        success: true,
        data,
        msg: "Get film by director successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get film by director",
      });
    }
  },

  //thêm 1 bộ phim
  async addFilm(req, res) {
    try {
      const {
        title,
        image_title,
        description,
        year_production,
        country_production,
        image_film,
        video_film,
        director,
        category,
        seriesFilm,
        ageLimit,
        filmLength,
        price,
      } = req.body;

      const newFilm = new Films({
        title,
        image_title,
        description,
        year_production,
        country_production,
        image_film,
        video_film,
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
        msg: "Added film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to add film",
        err,
      });
    }
  },

  //Thêm tập phim
  async addEpisodeOfFilm(req, res) {
    try {
      const id = req.params.id;
      const {
        episode,
        public_id_video,
        url_video,
        public_id_image,
        url_image,
      } = req.body;
      const film = await Films.findById({ _id: id });
      if (film) {
        const newEpisode = {
          episode,
          public_id_video,
          url_video,
          public_id_image,
          url_image,
        };
        film.seriesFilm.push(newEpisode);

        await film.save();

        return res.status(200).json({
          status: 200,
          success: true,
          msg: `Added episode ${episode} successfully`,
        });
      }
    } catch (err) {
      return res.status(200).json({
        status: 200,
        success: true,
        msg: `Failed to add episode`,
      });
    }
  },

  //chỉnh sửa thông tin bộ phim
  async updateFilm(req, res) {
    try {
      const id = req.params.id;
      const {
        title,
        image_title,
        description,
        year_production,
        country_production,
        image_film,
        video_film,
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
          image_title,
          description,
          year_production,
          country_production,
          image_film,
          video_film,
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
        msg: "Updated film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to update film",
      });
    }
  },

  //Chỉnh sửa tập phim
  async updateEpisodeOfFilm(req, res) {
    try {
      const filmId = req.params.filmId;
      const episodeId = req.params.episodeId;
      const {
        episode,
        public_id_video,
        url_video,
        public_id_image,
        url_image,
      } = req.body;
      const film = await Films.findById({ _id: filmId });
      if (film) {
        for (var i = 0; i < film.seriesFilm.length; i++) {
          if (film.seriesFilm[i].id == episodeId) {
            film.seriesFilm[i].episode = episode;
            film.seriesFilm[i].public_id_video = public_id_video;
            film.seriesFilm[i].url_video = url_video;
            film.seriesFilm[i].public_id_video = public_id_image;
            film.seriesFilm[i].url_video = url_image;
          }
        }
      }

      await film.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Updated episode of film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to update episode of film",
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
        msg: "Deleted film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to delete film",
      });
    }
  },

  //Xóa 1 tập của bộ phim
  async deleteEpisodeOfFilm(req, res) {
    try {
      const filmId = req.params.filmId;
      const episodeId = req.params.episodeId;
      const film = await Films.findById({ _id: filmId });
      if (film) {
        for (var i = 0; i < film.seriesFilm.length; i++) {
          if (film.seriesFilm[i].id == episodeId) {
            film.seriesFilm.splice(i, 1);
          }
        }
      }

      await film.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Deleted episode of film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to deleted episode of film",
      });
    }
  },

  //lấy phim theo thể loại
  async getFilmByCategoryId(req, res) {
    const categoryId = req.params.categoryId;

    try {
      var listFilm = await Films.find({
        category: { $elemMatch: { $eq: categoryId } },
      });

      return res.json({
        status: 200,
        success: true,
        msg: "Get list film by categoryId " + categoryId + " successfully",
        data: listFilm,
      });
    } catch (error) {
      console.log(error.message);
      return res.json({
        status: 400,
        success: false,
        msg: "Failed to get list film by categoryId",
      });
    }
  },
};

module.exports = filmCtrl;
