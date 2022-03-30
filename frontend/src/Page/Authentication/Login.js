import React, { useEffect, useRef, useState } from "react";
import GoogleLogin from "react-google-login";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { logo } from "../../imports/image";
import { MetaData } from "../../imports/index";
import {
  clearErrors,
  loginGoogleInitiate,
  loginInitiate,
} from "../../Redux/Action/ActionAuth";
import { AuthenticationStyle } from "../../Style/AuthenticationStyle/AuthenticationStyle";
import LoadingSmall from "../Loading/LoadingSmall";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const passwords = useRef({});
  const reCaptcha = useRef();
  passwords.current = watch("password");
  const dispatch = useDispatch();
  const [isLock, setIsLock] = useState(false);
  const [token, setToken] = useState("");
  const { auth, loading } = useSelector((state) => state.auth);
  const Auth = auth;
  const HandleGoogle = (response) => {
    dispatch(loginGoogleInitiate(response));
  };
  const handleSubmitForm = (data) => {
    if (!token) {
      swal("Mời bạn xác thực đầy đủ 😍", {
        icon: "error",
      });
      return;
    }
    const { email, password } = data;
    dispatch(loginInitiate(email, password));
  };
  const handleIsLock = () => {
    setIsLock(!isLock);
  };
  useEffect(() => {
    if (auth.success === true) {
      window.location.href = "/browse";
      localStorage.setItem("firstLogin", true);
      dispatch(clearErrors());
    }
    if (auth.success === false) {
      toast.error(`${auth.msg}`);
      dispatch(clearErrors());
    }
  }, [Auth?.success, dispatch]);

  return (
    <>
      <AuthenticationStyle />
      <MetaData title="Login-Movie" />
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <h1>Sign In</h1>
            <div className="email-input">
              <input
                type="email"
                placeholder="Email or phone number"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                })}
                name="email"
                id="email"
              />
            </div>
            <span style={{ color: "red" }}>
              {errors.email?.type === "required" &&
                "Mời bạn nhập Email đầy đủ! "}
              {errors?.email?.type === "pattern" &&
                "Email của ban không hợp lệ!"}
            </span>
            <div className="pwd-input">
              <input
                type={isLock ? "type" : "password"}
                {...register("password", { required: true })}
                placeholder="Password"
                name="password"
                id="password"
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

            <span style={{ color: "red" }}>
              {errors.password?.type === "required" &&
                "Mời bạn nhập đầy đủ mật khẩu! "}
            </span>
            {loading ? (
              <span className="loginButton2">
                <LoadingSmall />
              </span>
            ) : (
              <button className="loginButton">Sign In</button>
            )}
            <div className="help">
              <div className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <a href="#">Need help?</a>
            </div>
            <footer>
              <GoogleLogin
                clientId="1083950083676-fr9m6jsgig4aalf6mj81t8rlgl9v45bd.apps.googleusercontent.com"
                buttonText="Login Google +"
                onSuccess={HandleGoogle}
                onFailure={HandleGoogle}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <div className="login-google" onClick={renderProps.onClick}>
                    <i className="fab fa-google gg-icon"></i>
                    <a href="#">Login with Google</a>
                  </div>
                )}
              />
              <ReCAPTCHA
                ref={reCaptcha}
                sitekey="6LfVSXwcAAAAAF84Eh53ZDlQX-hyJeh_jrEEY3S5"
                onChange={(token) => setToken(token)}
                onExpired={(e) => setToken("")}
              />
              <span className="signup">
                New to Netflix?
                <a href="#">
                  <Link to="/signup">Sign up now</Link>
                </a>
              </span>
              <span className="learn-more">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href="#">Learn more</a>
              </span>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
