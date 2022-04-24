import React, { useRef, useState, useEffect } from "react";
import { AuthenticationStyle } from "../../Style/AuthenticationStyle/AuthenticationStyle";
import { MetaData } from "../../imports/index";
import { logo } from "../../imports/image";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
  clearErrors,
  AdminResetPassInitiate,
} from "../../Redux/Action/ActionAdminAuth";
const initialState = {
  password: "",
  confirmPassword: "",
};

const ResetAdmin = () => {
  const [state, setState] = useState(initialState);
  const { resetPassword } = useSelector((state) => state.admin);
  console.log(resetPassword, "reset password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const { password, confirmPassword } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(AdminResetPassInitiate(token, password, confirmPassword));
  };
  useEffect(() => {
    if (resetPassword.success === true) {
      swal(`${resetPassword.msg}`, {
        icon: "success",
      });
      dispatch(clearErrors());
    } else if (resetPassword.success === false) {
      swal(`${resetPassword.msg}`, {
        icon: "error",
      });
      dispatch(clearErrors());
    }
  }, [resetPassword]);
  return (
    <>
      <AuthenticationStyle />
      <MetaData title="Reset-Movie" />;
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
        <div className="auth__container">
          {resetPassword && resetPassword.success === true ? (
            <button
              className="loginButton1"
              onClick={() => navigate("/loginadmin")}
            >
              Thank Please Login Account 🥰
            </button>
          ) : (
            <form onSubmit={handleReset}>
              <h1>Reset</h1>
              <input
                type="password"
                placeholder="New Password"
                name="password"
                value={password}
                onChange={handleChangeInput}
              />

              <input
                type="password"
                placeholder="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChangeInput}
              />

              <button className="loginButton">Reset</button>
              <span>
                New Password Netflix ? &nbsp;
                <b>Thank For Love you 😇</b>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <b>Learn more</b>.
              </small>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetAdmin;
