import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {  AdminResgiterInitiate } from "../../Redux/Action/ActionAdminAuth";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const RegisterAdmin = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        getValues,
        control,
        reset,
      } = useForm();
      const passwords = useRef({});
      const dispatch = useDispatch();
      const { AdminRegister } = useSelector((state) => state.admin);
      passwords.current = watch("password");
      const [state, setState] = useState({
        email: "",
        hoten: "",
        username: "",
        password: "",
        ngaysinh: "",
        gioitinh: "",
        dienthoai: "",
      });
      const [isLock, setIsLock] = useState(false);
      const [isLocks, setIsLocks] = useState(false);
      const handleSubmitForm = async (data) => {
        const {fullname, email, password, sex, date_of_birth, phone_number } =
          data;
        dispatch(
            AdminResgiterInitiate(
                fullname, email, password, sex, date_of_birth, phone_number
          )
        );
      };
      const handleIsLock = () => {
        setIsLock(!isLock);
      };
      const handleIsLocks = () => {
        setIsLocks(!isLocks);
      };
      useEffect(() => {
        if (AdminRegister.status === 200) {
          reset();
          setIsLocks(false);
          setIsLock(false);
        }
      }, [AdminRegister]);
    
  return (
    <>
        <form
        className="sign-up-form form-main"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-envelope" />
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
          {errors.email?.type === "required" && "Mời bạn nhập Email đầy đủ! "}
          {errors?.email?.type === "pattern" && "Email của ban không hợp lệ!"}
        </span>

    

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("fullname", { required: true, maxLength: 20 })}
            type="text"
            placeholder="username"
            name="fullname"
            id="username"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.fullname?.type === "required" &&
            "Mời bạn nhập đầy đủ tên vào!"}
          {errors?.fullname?.type === "maxLength" &&
            "Tên của bạn không được quá 20 kí tự"}
        </span>

        <div className="input-field">
          <i className="fas fa-table"></i>
          <input
            {...register("date_of_birth", { required: true })}
            type="date"
            placeholder="ngaysinh"
            name="date_of_birth"
            id="ngaysinh"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.date_of_birth?.type === "required" &&
            "Mời bạn nhập đầy đủ ngày sinh vào!"}
        </span>
        <div className="input-field">
          <i className="fas fa-genderless"></i>
          <select
            name="sex"
            {...register("gioitinh", { required: true })}
            className="select"
          >
            <option name="sex" value="1" className="select">
              Nam
            </option>
            <option name="sex" value="0" className="select">
              Nữ
            </option>
          </select>
        </div>

        <span style={{ color: "red" }}>
          {errors.sex && (
            <p style={{ color: "red" }}> {errors.sex.message}</p>
          )}
        </span>
        <div className="input-field">
          <i className="fas fa-phone-alt"></i>
          <Controller
            name="phone_number"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                defaultCountry="TH"
                id="phone-input"
              />
            )}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors["dienthoai"] && (
            <p className="error-message">Invalid Phone</p>
          )}
        </span>

        <div className="input-field">
          {isLock ? (
            <i className="fa fa-unlock" onClick={handleIsLock} />
          ) : (
            <i className="fas fa-lock" onClick={handleIsLock} />
          )}
          <input
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
              },
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
            })}
            type={isLock ? "type" : "password"}
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "Mời bạn nhập đầy đủ mật khẩu. "}
          {errors?.password?.type === "minLength" &&
            "Mật khẩu của bạn phải 6 kí tự trở lên !!"}
          {errors?.password?.type === "pattern" &&
            "Mật khẩu có kí tự in hoa,số và kí tự đặt biệt !"}
        </span>
        <div className="input-field">
          {isLocks ? (
            <i className="fa fa-unlock" onClick={handleIsLocks} />
          ) : (
            <i className="fas fa-lock" onClick={handleIsLocks} />
          )}
          <input
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === getValues("password") || "The passwords do not match",
            })}
            type={isLocks ? "type" : "password"}
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.passwordConfirm?.type === "required" &&
            "Mời bạn nhập lại mật khẩu."}
          {errors.passwordConfirm?.type === "validate" &&
            "Mật khẩu nhập lại không khớp!   "}
        </span>
        <input type="submit" className="btn" name="signup" />
      </form>
  </>
  )
};

export default RegisterAdmin;
