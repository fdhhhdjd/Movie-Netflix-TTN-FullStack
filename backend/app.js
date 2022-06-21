const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require("compression");
app.enable("trust proxy");
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);
app.use(
  express.json({
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//!router import
const admin = require("./Routes/adminRoute.js");
const customer = require("./Routes/customerRoute.js");
const director = require("./Routes/directorRouter.js");
const category = require("./Routes/categoryRoute.js");
const film = require("./Routes/filmRoute.js");
const favourite = require("./Routes/favouriteRoute.js");
const rating = require("./Routes/ratingRoute.js");
const comment = require("./Routes/commentRoute.js");
const modeOfPayment = require("./Routes/modeOfPaymentRoute.js");
const feedback = require("./Routes/feedbackRoute.js");
const bill = require("./Routes/billRoute.js");
const upload = require("./Routes/UploadCloud.js");
const statistics = require("./Routes/statisticsRoute");

//!Link router Main

//Authenticate admin
app.use("/api/auth/admin", admin);

//Auhthenticate customer
app.use("/api/auth/customer", customer);

//Director
app.use("/api/director", director);

//Category
app.use("/api/category", category);

//Film
app.use("/api/film", film);

//Favourite
app.use("/api/favourite", favourite);

//Rating
app.use("/api/rating", rating);

//Comment
app.use("/api/comment", comment);

//Mode of payment
app.use("/api/modeOfPayment", modeOfPayment);

//Feedback
app.use("/api/feedback", feedback);

//Bill
app.use("/api/bill", bill);

//Upload
app.use("/api", upload);

//Statistics
app.use("/api/statistics/", statistics);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//!Middleware for error
module.exports = app;
