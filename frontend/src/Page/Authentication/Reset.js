import React from "react";
import { AuthenticationStyle } from "../../Style/AuthenticationStyle/AuthenticationStyle";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { MetaData } from "../../imports/index";
import { logo } from "../../imports/image";
const Reset = () => {
  const navigator = useNavigate();
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
        <div className="container">
          <form>
            <h1>Reset</h1>
            <input type="password" placeholder="New Password" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <input type="password" placeholder="Confirm Password" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <button className="loginButton">Sign In</button>
            <span>
              New Password Netflix ? &nbsp;
              <b>Thank For Love you 😇</b>
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

export default Reset;
