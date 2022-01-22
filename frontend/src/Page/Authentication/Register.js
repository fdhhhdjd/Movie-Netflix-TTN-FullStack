import React, { useEffect, useRef, useState } from "react";
import { RegisterStyle } from "../../Style/AuthenticationStyle/RegisterStyle";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../imports/index";
import { logo } from "../../imports/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, RegisterInitiate } from "../../Redux/Action/ActionAuth";
import LoadingSmall from "../Loading/LoadingSmall";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    reset,
  } = useForm();
  const passwords = useRef({});
  passwords.current = watch("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authRegister, loading } = useSelector((state) => state.auth);
  const handleSubmitForm = (data) => {
    const { email, name, password } = data;
    dispatch(RegisterInitiate(name, email, password));
  };

  useEffect(() => {
    if (authRegister.success === true) {
      reset();
      toast.success(`${authRegister.msg}`);
      navigate("/login");
      dispatch(clearErrors());
    } else if (authRegister.success === false) {
      toast.error(`${authRegister.msg}`);
    }
  }, [authRegister]);
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
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <h1>Register</h1>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              placeholder="UserName"
              name="name"
              id="name"
            />
            <span style={{ color: "red" }}>
              {errors.name?.type === "required" &&
                "Mời bạn nhập đầy đủ tên vào!"}
              {errors?.name?.type === "maxLength" &&
                "Tên của bạn không được quá 20 kí tự"}
            </span>
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
            <span style={{ color: "red" }}>
              {errors.email?.type === "required" &&
                "Mời bạn nhập Email đầy đủ! "}
              {errors?.email?.type === "pattern" &&
                "Email của ban không hợp lệ!"}
            </span>
            <input
              className="registerInput"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                },
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
              })}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />

            <span style={{ color: "red" }}>
              {errors.password?.type === "required" &&
                "Mời bạn nhập đầy đủ mật khẩu. "}
              {errors?.password?.type === "minLength" &&
                "Mật khẩu của bạn phải 6 kí tự trở lên !!"}
              {errors?.password?.type === "pattern" &&
                "Mật khẩu có kí tự in hoa,số và kí tự đặt biệt !"}
            </span>
            <input
              {...register("passwordConfirm", {
                required: true,
                validate: (value) =>
                  value === getValues("password") ||
                  "The passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              id="passwordConfirm"
            />

            <span style={{ color: "red" }}>
              {errors.passwordConfirm?.type === "required" &&
                "Mời bạn nhập lại mật khẩu."}
              {errors.passwordConfirm?.type === "validate" &&
                "Mật khẩu nhập lại không khớp!   "}
            </span>
            {loading ? (
              <span className="loginButton1">
                <LoadingSmall />
              </span>
            ) : (
              <button className="loginButton">Sign In</button>
            )}

            <span>
              New to Netflix ?{" "}
              <b
                onClick={() => navigate("/login")}
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
