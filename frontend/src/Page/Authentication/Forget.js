import React, { useRef, useState, useEffect } from "react";
import { ForgetStyle } from "../../Style/AuthenticationStyle/ForgetStyle";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../imports/index";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../../imports/image";
import swal from "sweetalert";
import LoadingSmall from "../Loading/LoadingSmall";
import {
  clearErrors,
  ForgetAdminInitiate,
} from "../../Redux/Action/ActionAuth";
const initialState = {
  email: "",
};
const Forget = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { forgetPassword, loading } = useSelector((state) => state.auth);
  const emailEL = useRef();
  const { email } = state;
  const handleForget = (e) => {
    e.preventDefault();
    dispatch(ForgetAdminInitiate(email));
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    emailEL.current.focus();
  }, []);
  useEffect(() => {
    if (forgetPassword.success === true) {
      swal(`${forgetPassword.msg}`, {
        icon: "success",
      });
      setState({ email: "" });
      dispatch(clearErrors());
    } else if (forgetPassword.success === false) {
      swal(`${forgetPassword.msg}`, {
        icon: "error",
      });
      dispatch(clearErrors());
    }
  }, [forgetPassword]);
  return (
    <>
      <ForgetStyle />
      <MetaData title="Forget-Movie" />
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
        <div className="forget__container">
          <form onSubmit={handleForget}>
            <h1>Forget</h1>
            <input
              type="email"
              placeholder="Email or phone number"
              name="email"
              value={email}
              ref={emailEL}
              onChange={handleChangeInput}
            />
            {loading ? (
              <span className="loginButton1">
                <LoadingSmall />
              </span>
            ) : (
              <button className="loginButton">Forget</button>
            )}

            <span>
              Want to login?{" "}
              <b
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer" }}
              >
                Login Now.
              </b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forget;
