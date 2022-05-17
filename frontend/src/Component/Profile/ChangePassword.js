import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import Header from "../../Component/Header/Header";
import { logo } from "../../imports/image";
import {
  ChangeAdminInitiate,
  clearErrors
} from "../../Redux/Action/ActionAuth";
import { ChangePasswordStyle } from "../../Style/ProfileStyle/ChangePasswordStyle";
const initialState = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};
const ChangePassword = () => {
  const [state, setState] = useState(initialState);
  const passwordEl = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changePassword, refreshTokens, profile } = useSelector(
    (state) => state.auth
  );
  const { password, confirmPassword, oldPassword } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ChangeAdminInitiate(refreshTokens, { ...state }));
  };
  useEffect(() => {
    if (changePassword.success === true) {
      swal(`${changePassword.msg}`, {
        icon: "success",
      });
      setState({ password: "", confirmPassword: "", oldPassword: "" });
      dispatch(clearErrors());
    } else if (changePassword.success === false) {
      swal(`${changePassword.msg}`, {
        icon: "error",
      });
      dispatch(clearErrors());
    }
  }, [changePassword]);
  return (
    <>
      <Header />
      <ChangePasswordStyle />
      <section className="contact">
        <img src={logo} className="logo-feedback" alt="" />
        <div className="content">
          <h2>
            ChangePassword{" "}
            {profile.fullname ||
              (profile.name && `${profile.fullname}` && `${profile.name}`)}
          </h2>
        </div>
        <div className="containers">
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Change Password </h2>
              <div className="inputBox">
                <input
                  type="password"
                  className="form-control"
                  name="oldPassword"
                  value={oldPassword}
                  ref={passwordEl}
                  required="required"
                  onChange={handleChangeInput}
                />
                <span>Old Password</span>
              </div>
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
                <input
                  type="submit"
                  name=""
                  value="Back Profile "
                  onClick={() => navigate("/profile")}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default ChangePassword;
