const Users = require('../Model/userModel');

const authCustomer = async (req, res, next) => {
  try {
    // Get user information by id
    const user = await Users.findOne({
      _id: req.user.id,
    });
    if (user.role === 1)
      return res.status(400).json({
        status: 400,
        msg: 'Customer resources access denied',
      });

    next();
  } catch (err) {
    return res.status(400).json({
      status: 400,
      msg: err.message,
    });
  }
};

module.exports = authCustomer;
