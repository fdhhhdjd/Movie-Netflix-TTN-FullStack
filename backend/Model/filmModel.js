const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date_production: {
      type: Date,
      required: true,
    },
    image_film: {
      public_id: {
        type: String,
        required: true,
        trim: true,
      },
      url: {
        type: String,
        required: true,
        trim: true,
      },
    },
    video_film: {
      public_id: {
        type: String,
        required: true,
        trim: true,
      },
      url: {
        type: String,
        required: true,
        trim: true,
      },
    },
    director: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
        require: true,
      },
    ],
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
      },
    ],
    seriesFilm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SeriesFilm',
      require: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    // favourite: {
    //   type: Boolean,
    //   default: false,
    // },
    // status: {
    //   type: Boolean,
    //   default: false,
    // },
    // average_score: {
    //   type: Number,
    //   min: 0,
    //   max: 5,
    //   default: 0,
    // },
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

module.exports = mongoose.model('Film', FilmSchema);
