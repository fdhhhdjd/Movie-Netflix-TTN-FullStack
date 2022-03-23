
import React from "react";
import Lottie from "lottie-react";
import  Button from "./Button";
import { defaultOptions, defaultOptions1 } from "../../imports/Lotite";
const ContentAdmin = ({handleFlag,flag}) => {
  return (
    <>
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Note New Here?</h3>
          <p>
          Sign in now and manage your apps
          </p>
          <Button
            className="btn transparent"
            id="sign-up-btn"
            onClick={handleFlag}
            title="Sign Up"
          />
        </div>
        <div className="image">
          <Lottie options={defaultOptions} />
        </div>
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Are you ready to go home website?</h3>
          <p>
          Hãy đăng kí ngay để trải nghiệm dịch vụ quản lí của chúng tôi
          </p>
          <Button
            className="btn transparent"
            id="sign-in-btn"
            onClick={handleFlag}
            title="Sign in"
          />
        </div>
        <div className="image">
          <Lottie options={defaultOptions1} />
        </div>
      </div>
    </div>
  </>
  )
  
};

export default ContentAdmin;
