const nodeMailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const { getMaxListeners } = require('process');

require('dotenv').config();
const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: false, // use SSL
    service: process.env.SMPT_SERVICE,
    auth: {
      // user: 'nguyentientai10@gmail.com',
      // pass: 'gdvjyxpfixzopsht',
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: '.html',
      partialsDir: path.resolve('./views'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views'),
    extName: '.html',
  };

  transporter.use('compile', hbs(handlebarOptions));

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    attachments: options.attachments,
    template: options.template,
    context: options.context,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
