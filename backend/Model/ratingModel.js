const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    film: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Film',
      require: true,
    },
    score: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Rating', RatingSchema);
