const mongoose = require("mongoose");

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
    year_production: {
      type: String,
      required: true,
      trim: true,
    },
    country_production: {
      type: String,
      required: true,
      trim: true,
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
    image_title: {
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
        ref: "Director",
        required: true,
      },
    ],
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    seriesFilm: [
      {
        episode: {
          type: Number,
          required: true,
          trim: true,
        },
        public_id_video: {
          type: String,
          required: true,
          trim: true,
        },
        url_video: {
          type: String,
          required: true,
          trim: true,
        },
        public_id_image: {
          type: String,
          required: true,
          trim: true,
        },
        url_image: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    price: {
      type: Number,
      default: 0,
    },
    filmLength: {
      type: String,
      required: true,
    },
    ageLimit: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Film", FilmSchema);
