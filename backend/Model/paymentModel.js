const mongoose = require('mongoose');

const ModeOfPaymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      public_id: { type: String, required: true, trim: true },
      url: { type: String, required: true, trim: true },
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

module.exports = mongoose.model('ModeOfPayment', ModeOfPaymentSchema);
