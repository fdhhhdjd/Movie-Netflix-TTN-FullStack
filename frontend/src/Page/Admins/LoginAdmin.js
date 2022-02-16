
import React, {useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoginAd from "../../Component/Admins/LoginAd";
import {AuthenticationAdStyle}  from "../../Style/Admin/AuthenticationAdStyle ";
import RegisterAdmin from "../../Component/Admins/RegisterAdmin";
import ContentAdmin from "../../Component/Admins/ContentAdmin"
const LoginAdmin = () => {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  const { AdminRegister } = useSelector((state) => state.admin);
  console.log(AdminRegister, "AdminRegister");
  useEffect(() => {
    if (AdminRegister.status === 200) {
      setFlag(false);
      toast.success("Register Success Please Login 😉!");
    } else if (AdminRegister.status === 400) {
      toast.error(AdminRegister.msg);
    }
  }, [AdminRegister]);
  return(
    <>
    <AuthenticationAdStyle >
    <div className={`container1 ${flag ? "sign-up-mode" : ""}`}>
          <div className="forms-container">
            <div className="signin-signup">
          
            <LoginAd handleFlag={handleFlag} flag={flag} />
            <RegisterAdmin />
            </div>
            <ContentAdmin handleFlag={handleFlag} flag={flag} />
          </div>
        </div>
    </AuthenticationAdStyle>
    </>
  ) 
};

export default LoginAdmin;

