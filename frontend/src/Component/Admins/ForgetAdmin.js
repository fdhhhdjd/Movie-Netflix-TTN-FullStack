import React, { useState, useRef, useEffect, useContext } from "react";
import { ForgetStyle } from "../../Style/Admin/ForgetStyle";
import { Link } from "react-router-dom";

import { Metadata } from "../../Page/MetaData/MetaData";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ForgetAdminsInitiate } from "../../Redux/Action/ActionAdminAuth";
import swal from "sweetalert";
const ForgetAdmin = () => {
  const { forget } = useSelector((state) => state.admin);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const handleSubmitForm = async (data) => {
    const { email } = data;
    dispatch(ForgetAdminsInitiate(email));
  };
  useEffect(() => {
    if (forget.status === 200) {
      reset();
      swal(`${forget.msg}`, {
        icon: "success",
      });
    } else if (forget.status === 400) {
      swal(`${forget.msg}`, {
        icon: "error",
      });
    }
  }, [forget]);
  return (
    <>
      {/* <Metadata title="Forget-Admin" /> */}
      <ForgetStyle>
        <div className="container1">
          <div className="forms-container">
            <div className="signin-signup">
              <form
                className="sign-in-form"
                onSubmit={handleSubmit(handleSubmitForm)}
              >
                <h2 className="title">Forget Password</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    })}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                  />
                </div>
                <span style={{ color: "red" }}>
                  {errors.email?.type === "required" &&
                    "Mời bạn nhập Email đầy đủ! "}
                  {errors?.email?.type === "pattern" &&
                    "Email của ban không hợp lệ!"}
                </span>
                <input
                  type="submit"
                  name="resetPassword"
                  className="btn solid"
                />
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Link to="/loginadmin ">
                    <span  style={{ color: "#4590ef" }}>
                      Back Login ?
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Forgot Password ?</h3>
                <p>
                  You forgot the password? do not worry, I will help you now.
                </p>
              </div>

            </div>
          </div>
        </div>
      </ForgetStyle>
    </>
  )
};

export default ForgetAdmin;
