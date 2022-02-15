const Feedbacks = require('../Model/feedBackModel.js');
const sendEmail = require('./SendEmail.js');

const feedbackCtrl = {
  //Xem tất cả phản hồi gửi tới
  async getAllFeedback(req, res) {
    try {
      const list_feedback = await Feedbacks.find({});
      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Get all feedbacks successfully',
        data: list_feedback,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to get all feedbacks',
      });
    }
  },

  //Admin trả lời những phản hồi khách hàng gửi tới
  async responseFeedback(req, res) {
    try {
      const id = req.params.id;
      const { content } = req.body;
      const feedback = await Feedbacks.findById({ _id: id });
      if (!feedback) {
        return res.status(400).json({
          status: 400,
          success: false,
          msg: 'This feedback does not exist',
        });
      }

      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: feedback.email,
        subject: feedback.subject,
        html: `<h1>Dear ${feedback.fullname},</h1><p>Your last feedback content is: ${feedback.content}</p><br><p>Thanks again for your sending feedback. So the answer of us is:</p>
        <p>${content}</p>`,
      });

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Sent email response feedback successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to send response feedback',
      });
    }
  },

  //gửi email phản hồi cho web
  async sendFeedback(req, res) {
    try {
      const { fullname, email, subject, content } = req.body;
      if (!fullname || !email || !subject || !content) {
        return res.status(400).json({
          status: 400,
          success: false,
          msg: 'Please fill in full infomation',
        });
      }
      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: email,
        subject,
        html: `<h1>Dear ${fullname},</h1><p>We've already received your feedback. The content is: ${content}</p><br><p>Thanks for your sending feedback to us. We will response as soon as posible</p>`,
      });

      const newFeedback = new Feedbacks({
        fullname,
        email,
        subject,
        content,
      });

      //save in mongodb
      await newFeedback.save();

      return res.status(200).json({
        status: 200,
        success: true,
        msg: 'Sent feedback successfully',
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: 'Failed to send feedback',
      });
    }
  },
};

module.exports = feedbackCtrl;
