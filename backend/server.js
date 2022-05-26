const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
const cloudinary = require("cloudinary");
const fs = require("fs");
dotenv.config({ path: ".env" });
const connectDB = require("./configs/db");
connectDB();
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tai heo Fa" });
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`server is listening `));
