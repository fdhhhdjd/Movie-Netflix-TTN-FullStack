const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  film: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Film",
  },
  price: {
    type: Number,
    required: true,
  },
  mode_of_payment: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ModeOfPayment",
  },
  id_payment: {
    type: String,
    required: true,
  },
  date_purchase: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bill", BillSchema);
