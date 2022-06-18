import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import Header from "../../Component/Header/Header";
import { logo } from "../../imports/image";
import { NewAdminInitiate, clearErrors } from "../../Redux/Action/ActionAuth";
import { ChangePasswordStyle } from "../../Style/ProfileStyle/ChangePasswordStyle";
const initialState = {
  password: "",
  confirmPassword: "",
};
const Information = () => {
  const [state, setState] = useState(initialState);
  const passwordEl = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigator = useNavigate();
  const navigate = useNavigate();
  const { newPassword, refreshTokens, profile } = useSelector(
    (state) => state.auth
  );
  console.log(refreshTokens,'refreshTokens')
  const { password, confirmPassword } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(NewAdminInitiate(refreshTokens, { ...state }));
  };
  useEffect(() => {
    if (newPassword?.success === true) {
      setState({ password: "", confirmPassword: "", oldPassword: "" });
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        window.location.href = "/browse";
      }
    } else if (newPassword.success === false) {
      swal(`${newPassword.msg}`, {
        icon: "error",
      });
    }
  }, [newPassword]);
  return (
    <>
      <Header/>
      <ChangePasswordStyle />
      <section className="contact">
        <img src={logo} className="logo-feedback" alt="" />
        <div className="content">
          <h2>
            New Password{" "}
            {profile.fullname ||
              (profile.name && `${profile.fullname}` && `${profile.name}`)}
          </h2>
        </div>
        <div className="containers">
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>New Password </h2>
              <br />

              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={password}
                  required="required"
                  onChange={handleChangeInput}
                />
                <span>New password</span>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={confirmPassword}
                  required="required"
                  onChange={handleChangeInput}
                />
                <span>Confirm Password</span>
              </div>

              <div className="inputBox">
                <input type="submit" name="" value="Change " />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Information;
