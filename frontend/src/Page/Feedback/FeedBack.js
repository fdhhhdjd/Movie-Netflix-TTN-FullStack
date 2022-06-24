import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { logo } from "../../imports/image";
import { MetaData, Header } from "../../imports/index";
import {
  clearErrors,
  SendFeedBackInitiate,
} from "../../Redux/Action/ActionFeedBack";
import { FeedbackStyle } from "../../Style/FeedBackStyle/FeedbackStyle";
const Feedback = () => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    subject: "",
    content: "",
  });
  const { fullname, subject, content, email } = state;
  const { profile } = useSelector((state) => state.auth);
  const { sendFeedBack } = useSelector((state) => state.feedback);
  const user = profile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      user && setState({ fullname: user.fullname, email: user.email });
    }
  }, [user, sendFeedBack]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SendFeedBackInitiate({ ...state }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    if (sendFeedBack.status === 200) {
      swal(`${sendFeedBack.msg}`, {
        icon: "success",
      });
      setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);
      setState({ content: "", subject: "" });
    } else if (sendFeedBack.status === 400) {
      swal(`${sendFeedBack.msg}`, {
        icon: "error",
      });
      setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);
    }
  }, [sendFeedBack, dispatch]);
  return (
    <>
      <Header />
      <FeedbackStyle />
      <MetaData title={`Feedback-${profile.fullname || profile.name}`} />
      <section className="contact">
        <div className="content">
          <h2>Customer FeedBack </h2>
        </div>
        <div className="containers">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <br />
                <p> Ninh An - Ninh Hoa - Khanh Hoa</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="far fa-envelope" style={{ color: "red" }}></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <br />
                <p>
                  <Link to="mailto:info@yoursite.com" id="feedback">
                    nguyenthanhtat258@gmail.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone color " aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone:</h3>
                <br />
                <p>
                  <a href="tel://0798805741" id="feedback">
                    + 84 931612273
                  </a>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Facebook</h3>
                <br />
                <p>
                  <Link
                    to="https://www.facebook.com/kocan.yeuai.5/"
                    id="feedback"
                    target="_blank"
                  >
                    Nguyen Thanh Tat
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <img src={logo} className="logo-feedback" alt="" />
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  className="form-control"
                  type="type"
                  required
                  value={fullname || ""}
                  name="fullname"
                  onChange={handleChange}
                  // disabled={true}
                />
              </div>
              <div className="inputBox">
                <input
                  className="form-control"
                  type="type"
                  value={email || ""}
                  name="email"
                  onChange={handleChange}
                  // disabled={true}
                />
              </div>
              <div className="inputBox">
                <input
                  // className="form-control"
                  type="type"
                  value={subject || ""}
                  name="subject"
                  onChange={handleChange}
                  required
                />
                <span>Subject</span>
              </div>
              <div className="inputBox">
                <textarea
                  // className="form-control"
                  cols="10"
                  rows="5"
                  value={content || ""}
                  name="content"
                  onChange={handleChange}
                  required
                ></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
        <div className="bubble-container">
          <div className="bubble fb">
            <a
              href="https://www.facebook.com/profile.php?id=100006139249437"
              target="_blank"
            >
              <span className="bubble-item">
                <span className="animated infinite zoomIn bubble-circle fb"></span>
                <span className="animated infinite pulse bubble-circle-fill fb"></span>
                <span className="animated infinite tada phone-icon bubble-img-circle-fb"></span>
              </span>
            </a>
          </div>
          <div className="bubble phone">
            <a href="tel:0339253073">
              <span className="bubble-item">
                <span className="animated infinite zoomIn bubble-circle phone"></span>
                <span className="animated infinite pulse bubble-circle-fill phone"></span>
                <span className="animated infinite tada bubble-img-circle-phone"></span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <div style={{ background: "black", color: "white" }}>
        <marquee
          behavior="scroll"
          style={{ fontSize: "22px" }}
          className="marquee1"
        >
         Welcome to Web Movie NTripleT, here is the guest feedback
          Goods come to Team, here you can give any feedback when you feel your teacher
          unsatisfied so that I can fix it as well as fix the website, I
          I will reply to your feedback as soon as possible, thank you everyone for visiting
          visit, wish you a happy movie watching...
        </marquee>
      </div>
    </>
  );
};
export default Feedback;
