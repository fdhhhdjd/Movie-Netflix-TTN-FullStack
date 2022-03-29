import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthenticationStyle } from "../../Style/AuthenticationStyle/AuthenticationStyle";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { MetaData } from "../../imports/index";
import { logo } from "../../imports/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  loginGoogleInitiate,
  loginInitiate,
} from "../../Redux/Action/ActionAuth";
import { toast } from "react-toastify";
import LoadingSmall from "../Loading/LoadingSmall";
import { Facebook } from "@material-ui/icons";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const passwords = useRef({});
  passwords.current = watch("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLock, setIsLock] = useState(false);
  const { auth, loading } = useSelector((state) => state.auth);
  const Auth = auth;
  const HandleGoogle = (response) => {
    dispatch(loginGoogleInitiate(response));
  };
  const handleSubmitForm = (data) => {
    const { email, password } = data;
    dispatch(loginInitiate(email, password));
  };
  const handleIsLock = () => {
    setIsLock(!isLock);
  };
  useEffect(() => {
    if (auth.success === true) {
      window.location.href = "/home";
      localStorage.setItem("firstLogin", true);
      dispatch(clearErrors());
    }
    if (auth.success === false) {
      toast.error(`${auth.msg}`);
      dispatch(clearErrors());
    }
  }, [Auth]);

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
          <GoogleLogin
            clientId="1083950083676-fr9m6jsgig4aalf6mj81t8rlgl9v45bd.apps.googleusercontent.com"
            buttonText="Login Google +"
            onSuccess={HandleGoogle}
            onFailure={HandleGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <h1>Sign In</h1>
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
              <div className="login-facebook">
                <Facebook className="fb-icon" />
                <a href="#">Login with Facebook</a>
              </div>
              <span className="signup">
                New to Netflix?<a href="#">Sign up now</a>
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
