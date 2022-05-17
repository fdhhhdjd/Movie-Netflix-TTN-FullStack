const Categories = require('../Model/categoryModel.js');

const categoryCtrl = {
  //Xem tất cả thể loại phim
  async getAllCategory(req, res) {
    try {
      const all_category = await Categories.find({});
      return res.json({
        status: 200,
        success: true,
        msg: 'Get all categories successfully',
        data: all_category,
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: 'Failed to get all categories',
      });
    }
  },

  //Tạo thêm 1 thể loại phim
  async addCategory(req, res) {
    try {
      const { name } = req.body;
      const newCategory = new Categories({
        name,
      });

      //save mongodb
      await newCategory.save();

      return res.json({
        status: 200,
        success: true,
        msg: 'Added category successfully',
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: 'Failed to add category',
      });
    }
  },

  //Chỉnh sửa thể loại phim
  async updateCategory(req, res) {
    try {
      const { name } = req.body;
      const id = req.params.id;
      await Categories.findByIdAndUpdate(
        { _id: id },
        {
          name: name,
          updatedAt: Date.now,
        }
      );

      return res.json({
        status: 200,
        success: true,
        msg: 'Updated category successfully',
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: 'Failed to update category',
      });
    }
  },

  //Xóa thể loại phim
  async deleteCategory(req, res) {
    try {
      const id = req.params.id;
      await Categories.findByIdAndDelete({ _id: id });
      return res.json({
        status: 200,
        success: true,
        msg: 'Deleted category successfully',
      });
    } catch (err) {
      return res.json({
        status: 400,
        success: false,
        msg: 'Failed to delete category',
      });
    }
  },
};

module.exports = categoryCtrl;
