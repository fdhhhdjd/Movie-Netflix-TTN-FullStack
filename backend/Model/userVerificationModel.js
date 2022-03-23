const mongoose = require("mongoose");

const UserVertificationSchema = new mongoose.Schema({
  userId: String,
  uniqueString: String,
  createdAt: Date,
  expiresAt: Date,
});

module.exports = mongoose.model("UserVerification", UserVertificationSchema);
