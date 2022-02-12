const Comments = require('../Model/commentModel.js');

const commentCtrl = {
  //Xem tất cả bình luận
  async getAllComment(req, res) {
    try {
      const data = await Comments.find({}).populate('user').populate('film');
      return res.status(200).json({
        status: 200,
        success: true,
        data: data,
        msg: 'Get all comments successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get all comments',
      });
    }
  },

  //Xem bình luận của bộ phim
  async getCommentsOfFilm(req, res) {
    try {
      const filmId = req.params.filmId;
      const data = await Comments.find({ film: filmId })
        .populate('user')
        .populate('film');
      return res.status(200).json({
        status: 200,
        success: true,
        data: data,
        msg: 'Get comments of film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        data: data,
        msg: 'Failed to get comments of film',
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
        msg: 'Commented film successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to comment film',
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
        msg: 'Updated comment successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: true,
        msg: 'Failed to update comment',
      });
    }
  },

  //Xóa bình luận
  async deleteComment(req, res) {
    try {
      const id = req.params.id;
      await Comments.findByIdAndDelete({
        _id: id,
      });
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Deleted comment successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: true,
        msg: 'Failed to delete comment',
      });
    }
  },
};
module.exports = commentCtrl;
