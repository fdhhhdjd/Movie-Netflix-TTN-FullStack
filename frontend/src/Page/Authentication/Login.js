import React from "react";
import { AuthenticationStyle } from "../../Style/AuthenticationStyle/AuthenticationStyle";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { MetaData } from "../../imports/index";
import { logo } from "../../imports/image";
const Login = () => {
  const navigator = useNavigate();
  const HandleGoogle = (response) => {};

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
          <form>
            <h1>Sign In</h1>

            <input type="email" placeholder="Email or phone number" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <input type="password" placeholder="Password" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix ? &nbsp;
              <b
                onClick={() => navigator("/signup")}
                style={{ cursor: "pointer" }}
              >
                Sign up now
              </b>
              &nbsp; Or &nbsp;
              <b
                onClick={() => navigator("/forget")}
                style={{ cursor: "pointer" }}
              >
                Forget
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

export default Login;
