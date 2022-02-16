import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoginAd from "../../Component/Admins/LoginAd";
import { AuthenticationAdStyle } from "../../Style/Admin/AuthenticationAdStyle ";
import RegisterAdmin from "../../Component/Admins/RegisterAdmin";
import ContentAdmin from "../../Component/Admins/ContentAdmin";
import { clearErrors } from "../../Redux/Action/ActionAdminAuth";
const LoginAdmin = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const handleFlag = () => {
    setFlag(!flag);
  };
  const { AdminRegister } = useSelector((state) => state.admin);
  console.log(AdminRegister, "AdminRegister");
  useEffect(() => {
    if (AdminRegister.success === true) {
      window.location.href = "/admin";
      localStorage.setItem("firstLogin", true);
      dispatch(clearErrors());
    }
    if (AdminRegister.success === false) {
      toast.error(`${AdminRegister.msg}`);
      dispatch(clearErrors());
    }
  }, [AdminRegister]);
  return (
    <>
      <AuthenticationAdStyle>
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
  );
};

export default LoginAdmin;
