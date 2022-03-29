import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Header from "../../Component/Header/Header";
import { logo } from "../../imports/image";
import { MetaData } from "../../imports/index";
import { clearErrors, SendFeedBackInitiate } from '../../Redux/Action/ActionFeedBack';
import { FeedbackStyle } from "../../Style/FeedBackStyle/FeedbackStyle";
const Feedback = () => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    subject: "",
    content: "",
  });
  const { fullname, email, subject, content } = state;
  console.log(fullname, email, subject, content);
  const { profile } = useSelector((state) => state.auth);
  const {sendFeedBack} = useSelector((state) => state.feedback);
  const user = profile;
  console.log(user,'user')
  console.log(state,'state')
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      user && setState(user);
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name || !email || !subject || !message) {
    //   toast.error("Mời bạn nhập đầy đủ vào Form !!");
    // } else {
      dispatch(SendFeedBackInitiate({...state}))
      // toast.success("Cảm ơn bạn đã phản hồi cho tôi!");
    // }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(()=>{
    if(sendFeedBack.status === 200){
      swal(`${sendFeedBack.msg}`, {
        icon: "success",
      });
      setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);
      setState({  content: "", subject: "" });
      
    }else if (sendFeedBack.status === 400){
      swal(`${sendFeedBack.msg}`, {
        icon: "error",
      });
      setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);
    }
  },[sendFeedBack])

  return (
    <>
      <Header />
      <FeedbackStyle />
      <MetaData title={`Feedback-${profile.fullname || profile.name}`} />
      <section className="contact">
        <img src={logo} className="logo-feedback" alt="" />
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
                <p>Tổ 9 Thị Trấn Vạn Giã Vạn Ninh,Khánh Hòa</p>
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
                    nguyentientai10@gmail.com
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
                    +0798805741
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
                    to="https://www.facebook.com/profile.php?id=100006139249437"
                    id="feedback"
                    target="_blank"
                  >
                    https://www.facebook.com/profile.php?id=100006139249437
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  className="form-control"
                  type="type"
                  required
                  value={fullname}
                  name="fullname"
                  onChange={handleChange}
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  className="form-control"
                  type="type"
                  value={state.email|| email}
                  name="email"
                  onChange={handleChange}
                  disabled={true}
                />
                {/* <span>Email</span> */}
              </div>
              <div className="inputBox">
                <input
                  className="form-control"
                  type="type"
                  value={subject}
                  name="subject"
                  onChange={handleChange}
                  required
                />
                <span>Subject</span>
              </div>
              <div className="inputBox">
                <textarea
                  className="form-control"
                  cols="10"
                  rows="5"
                  value={content}
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
      </section>
      <div style={{ background: "black", color: "white" }}>
        <marquee
          behavior="scroll"
          style={{ fontSize: "22px" }}
          className="marquee1"
        >
          Chào mừng bạn đến với Web Movie NTripleT,đây là phần phản hồi khách
          hàng đến với Team,ở đây bạn có thể phản hồi bất kì khi cảm thầy mình
          chưa hài lòng để mình có thể sữa chưa cũng như khắc phục webside,mình
          sẽ trả lời những phản hồi của bạn sớm nhất,cảm ơn mọi người đã ghé
          thăm,chúc các bạn xem phim vui vẻ ,
        </marquee>
      </div>
    </>
  );
};
export default Feedback;
