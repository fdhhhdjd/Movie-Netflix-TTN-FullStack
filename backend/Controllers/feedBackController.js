const Feedbacks = require("../Model/feedBackModel.js");
const sendEmail = require("./SendEmail.js");
const path = require("path");

const feedbackCtrl = {
  //Xem tất cả phản hồi gửi tới
  async getAllFeedback(req, res) {
    try {
      const list_feedback = await Feedbacks.find({});
      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Get all feedbacks successfully",
        data: list_feedback,
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to get all feedbacks",
      });
    }
  },

  //Admin trả lời những phản hồi khách hàng gửi tới
  async responseFeedback(req, res) {
    try {
      const id = req.params.id;
      const { response_content } = req.body;
      const feedback = await Feedbacks.findById({ _id: id });
      if (!feedback) {
        return res.status(400).json({
          status: 400,
          success: false,
          msg: "This feedback does not exist",
        });
      }

      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: feedback.email,
        subject: feedback.subject,
        template: "response_feedback",
        attachments: [
          {
            filename: "netflix.png",
            path: path.resolve("./views", "images", "netflix.png"),
            cid: "netflix_logo",
          },
        ],
        context: {
          fullname: feedback.fullname,
          feedback_content: feedback.content,
          response_content,
        },
      });

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "Sent email response feedback successfully",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        success: false,
        msg: "Failed to send response feedback",
      });
    }
  },

  //gửi email phản hồi cho web
  async sendFeedback(req, res) {
    try {
      const { fullname, email, subject, content } = req.body;
      if (!fullname || !email || !subject || !content) {
        return res.json({
          status: 400,
          success: false,
          msg: "Please fill in full infomation",
        });
      }
      await sendEmail({
        emailFrom: process.env.SMPT_MAIL,
        emailTo: email,
        subject,
        template: "feedback",
        attachments: [
          {
            filename: "netflix.png",
            path: path.resolve("./views", "images", "netflix.png"),
            cid: "netflix_logo",
          },
        ],
        context: {
          fullname,
          content,
        },
      });

      const newFeedback = new Feedbacks({
        fullname,
        email,
        subject,
        content,
      });

      //save in mongodb
      await newFeedback.save();

      return res.json({
        status: 200,
        success: true,
        msg: "Sent feedback successfully",
      });
    } catch (err) {
      return res.json(err.message);
      // return res.status(400).json({
      //   status: 400,
      //   success: false,
      //   msg: 'Failed to send feedback',
      // });
    }
  },
};

module.exports = feedbackCtrl;
