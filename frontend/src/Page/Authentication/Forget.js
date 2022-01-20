import React from "react";
import { ForgetStyle } from "../../Style/AuthenticationStyle/ForgetStyle";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../imports/index";
import { logo } from "../../imports/image";
const Forget = () => {
  const navigator = useNavigate();
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
        <div className="container">
          <form>
            <h1>Forget</h1>
            <input type="email" placeholder="Email or phone number" />
            <span style={{ color: "red" }}>
              Error opassssssssssssssssssssss
            </span>
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix?{" "}
              <b
                onClick={() => navigator("/login")}
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
