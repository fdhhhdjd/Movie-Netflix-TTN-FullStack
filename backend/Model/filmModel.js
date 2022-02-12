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
        required: true,
      },
    ],
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
    ],
    seriesFilm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SeriesFilm',
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    filmLength: {
      type: String,
      required: true,
    },
    ageLimit: {
      type: String,
      required: true,
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

module.exports = mongoose.model('Film', FilmSchema);
