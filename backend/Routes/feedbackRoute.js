const router = require('express').Router();
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin.js');
const feedbackCtrl = require('../Controllers/feedBackController.js');

//Xem tất cả phản hồi của khách hàng cho web
router.get('/all', auth, authAdmin, feedbackCtrl.getAllFeedback);

//Gửi email phản hồi cho web
router.post('/send', feedbackCtrl.sendFeedback);

//Admin trả lời feedback của khách hàng
router.post('/response/:id', auth, authAdmin, feedbackCtrl.responseFeedback);

module.exports = router;
