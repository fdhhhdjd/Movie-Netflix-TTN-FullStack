import React from "react";
import { NotfoundStyle } from "../../Style/NotFoundStyle/NotfoundStyle";
import { logo } from "../../imports/image";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <NotfoundStyle />
      <div>
        <div className="container">
          <img src={logo} alt="" className="img1" />
          <div className="row content">
            <div className="col-lg-12" />

            <div className="col-lg-12">
              <h1>404</h1>

              <h2>Oops, the page you're looking for does not exist.</h2>
              <br />
              <p>
                You may want to head back to the homepage.
                <br />
                If you think something is broken, report a problem.
                <br />
              </p>
              <span className="btn" onClick={() => navigate("/home")}>
                RETURN HOME
              </span>
              <span className="btn" onClick={() => navigate("/feedback")}>
                REPORT PROBLEM
              </span>
            </div>
          </div>
        </div>
        <div className="bg-img" />
      </div>
    </>
  );
};

export default NotFound;
