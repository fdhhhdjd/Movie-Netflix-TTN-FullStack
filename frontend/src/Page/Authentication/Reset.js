import React, { useRef, useState, useEffect } from "react";
import { AuthenticationStyle } from "../../Style/AuthenticationStyle/AuthenticationStyle";
import { MetaData, useTogglePassword } from "../../imports/index";
import { logo } from "../../imports/image";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { clearErrors, ResetPassInitiate } from "../../Redux/Action/ActionAuth";
const initialState = {
  password: "",
  confirmPassword: "",
};
const Reset = () => {
  const [state, setState] = useState(initialState);
  const { resetPassword } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const { password, confirmPassword } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const { handleIsLock, isLock, isLockConfirm, handleIsLockConfirm } =
    useTogglePassword();
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(ResetPassInitiate(token, password, confirmPassword));
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
      <MetaData title="Reset-Movie" />
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
        <div className="auth__container">
          {resetPassword && resetPassword.success === true ? (
            <button className="loginButton1" onClick={() => navigate("/login")}>
              Thank Please Login Account 🥰
            </button>
          ) : (
            <form onSubmit={handleReset}>
              <h1>Reset</h1>

              <div className="pwd-input">
                <input
                  placeholder="New Password"
                  name="password"
                  value={password}
                  onChange={handleChangeInput}
                  type={isLock ? "type" : "password"}
                />
                {isLock ? (
                  <i
                    className="fa fa-eye-slash"
                    onClick={handleIsLock}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <i
                    className="fa fa-eye"
                    onClick={handleIsLock}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>

              <div className="pwd-input">
                <input
                  type={isLockConfirm ? "type" : "password"}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChangeInput}
                />
                {isLockConfirm ? (
                  <i
                    className="fa fa-eye-slash"
                    onClick={handleIsLockConfirm}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <i
                    className="fa fa-eye"
                    onClick={handleIsLockConfirm}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>

              <button className="loginButton">Reset</button>
              <br />
              <footer>
                <span className="signup">
                  Wanna login ? &nbsp;
                  <Link to="/login">Login now</Link>
                </span>
                <small>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <b>Learn more</b>.
                </small>
              </footer>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Reset;
