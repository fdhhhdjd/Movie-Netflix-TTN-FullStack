const Comments = require("../Model/commentModel.js");

const commentCtrl = {
  //Xem tất cả bình luận
  async getAllComment(req, res) {
    try {
      const data = await Comments.find({ deleted: false })
        .populate("user")
        .populate("film");
      return res.status(200).json({
        status: 200,
        success: true,
        data: data,
        msg: "Get all comments successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get all comments",
      });
    }
  },

  //Xem bình luận của bộ phim
  async getCommentsOfFilm(req, res) {
    try {
      const filmId = req.params.filmId;
      const data = await Comments.find({
        film: filmId,
        deleted: false,
      }).populate("user");
      return res.status(200).json({
        status: 200,
        success: true,
        data: data,
        msg: "Get comments of film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get comments of film",
      });
    }
  },

  //Bình luận bộ phim
  async commentFilm(req, res) {
    try {
      const userId = req.user.id;
      const filmId = req.params.filmId;
      const { content } = req.body;

      const newComment = new Comments({
        user: userId,
        film: filmId,
        content,
      });

      await newComment.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Commented film successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to comment film",
      });
    }
  },

  //Chỉnh sửa bình luận
  async updateComment(req, res) {
    try {
      const id = req.params.id;
      const { content } = req.body;
      await Comments.findByIdAndUpdate(
        { _id: id },
        {
          content,
          updatedAt: Date.now,
        }
      );

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Updated comment successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: true,
        msg: "Failed to update comment",
      });
    }
  },

  //Xóa mềm bình luận
  async softDeleteComment(req, res) {
    try {
      const id = req.params.id;
      await Comments.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          deleted: true,
        }
      );
      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Deleted comment successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: true,
        msg: "Failed to delete comment",
        err: err.message,
      });
    }
  },

  //Thùng rác chứa các comment khách hàng đã xóa
  async getRecycleBinOfDeletedComment(req, res) {
    try {
      const trash = await Comments.find({
        deleted: true,
      })
        .populate("user")
        .populate("film");

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get bin of deleted comment successfully",
        trash,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get bin of deleted comment",
      });
    }
  },

  //Khôi phục lại comment đã bị xóa
  async restoreCommentInBin(req, res) {
    try {
      const id = req.params.id;
      await Comments.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          deleted: false,
        }
      );

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Restored comment successfully",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: true,
        msg: "Failed to restore comment",
      });
    }
  },

  //Xóa comment trong thùng rác nếu quá hạn 7 ngày
  async autoDeleteCommentFromBin(req, res) {
    try {
      const get_day_of_time = (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
      };
      const now = new Date();

      const trash = await Comments.find({ deleted: true });
      for (var i = 0; i < trash.length; i++) {
        if (get_day_of_time(trash[i].updatedAt, now) >= 7) {
          await Comments.findByIdAndDelete({ _id: trash[i]._id });
        }
      }

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Successfully",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed",
      });
    }
  },
};
module.exports = commentCtrl;
