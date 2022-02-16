import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MetaData } from "../../imports";
import { HeaderWelcomeStyle } from "../../Style/Welcome/HeaderWelcomeStyle";
import logo from "../../Image/logo.png";

const HeaderWelcome = () => {
  const navigator = useNavigate();
  return (
    <>
      <HeaderWelcomeStyle />
      <MetaData title="Welcome-Movie-TTN" />
      <header className="showcase">
        <div className="showcase-top">
          <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
          <Link to="/login" className="btn btn-rounded">
            Sign In
          </Link>

        </div>
        <div className="showcase-content">
          <h1>Movie,TV show and more</h1>
          <p>Watch anytime,anywhere at Movie-TTN </p>
          <Link to="/login" className="btn-header btn-xl">
            watch free to 30 day
            <i className="fa fa-chevron-right btn-icon"></i>
          </Link>
        </div>
      </header>
      <div>

      </div>
    </>
  );
};

export default HeaderWelcome;
