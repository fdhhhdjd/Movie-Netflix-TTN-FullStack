const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const UserSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: false,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    image: {
      type: Object,
      default: {
        public_id: "121313112",
        url: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
      },
    },
    phone_number: {
      type: Number,
      required: false,
      trim: true,
    },
    sex: {
      type: Number,
      required: false,
      trim: true,
    },
    date: {
      type: String,
      required: false,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },

  { timestamps: true }
);
UserSchema.methods.getResetPasswordToken = function () {
  //! tạo mã thông báo
  const resetToken = crypto.randomBytes(20).toString("hex");

  //! Thêm resetPasswordToken vào userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
