import React from "react";
import { RegisterStyle } from "../../Style/AuthenticationStyle/RegisterStyle";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../imports/index";
import { logo } from "../../imports/image";
const Register = () => {
  const navigator = useNavigate();
  return (
    <>
      <RegisterStyle />
      <MetaData title="Register-Movie" />
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
        <div className="container">
          <form>
            <h1>Register</h1>
            <input type="type" placeholder="Username" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <input type="email" placeholder="Email or phone number" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <input type="password" placeholder="Password" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <input type="password" placeholder="Password" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix ?{" "}
              <b
                onClick={() => navigator("/login")}
                style={{ cursor: "pointer" }}
              >
                Login now.
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

export default Register;
