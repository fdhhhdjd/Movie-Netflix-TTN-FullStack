const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
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
const admin = require('./Routes/adminRoute.js');
const customer = require('./Routes/customerRoute.js');
const director = require('./Routes/directorRouter.js');
const category = require('./Routes/categoryRoute.js');
const film = require('./Routes/filmRoute.js');
const favourite = require('./Routes/favouriteRoute.js');
const rating = require('./Routes/ratingRoute.js');
const comment = require('./Routes/commentRoute.js');
const payment = require('./Routes/paymentRoute.js');
const feedback = require('./Routes/feedbackRoute.js');
const upload = require('./Routes/UploadCloud.js');

//!Link router Main

//Authenticate admin
app.use('/api/auth/admin', admin);

//Auhthenticate customer
app.use('/api/auth/customer', customer);

//Director
app.use('/api/director', director);

//Category
app.use('/api/category', category);

//Film
app.use('/api/film', film);

//Favourite
app.use('/api/favourite', favourite);

//Rating
app.use('/api/rating', rating);

//Comment
app.use('/api/comment', comment);

//Mode of payment
app.use('/api/payment', payment);

//Feedback
app.use('/api/feedback', feedback);

//Upload
app.use('/api', upload);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
});

//!Middleware for error
module.exports = app;
