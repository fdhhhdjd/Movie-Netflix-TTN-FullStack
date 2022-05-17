
import React, { useState, useContext, useEffect, useRef } from "react";
import { UserListStyle } from "../../Style/Admin/NewUserStyle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import swal from "sweetalert";
import {
  ChangeAdminsInitiate,
  clearErrors,
} from "../../Redux/Action/ActionAdminAuth";
const initialState = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};
const ChangePasswordAdmins = () => {
  const [state, setState] = useState(initialState);
  const { profile, token, changePassword } = useSelector(
    (state) => state.admin
  );
  const passwordEl = useRef();
  const { password, confirmPassword, oldPassword } = state;
  const { tokens } = useParams();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(ChangeAdminsInitiate(token.accessToken, { ...state }));
  };
  console.log(changePassword,'taiheo')
  useEffect(() => {
    if (changePassword.status === 200) {
      swal(`${changePassword.msg} 🤨`, {
        icon: "success",
      });
      setState({ oldPassword: "", password: "", confirmPassword: "" });
      dispatch(clearErrors());
    } else if (changePassword.status === 400) {
      swal(`${changePassword.msg} 🤨`, {
        icon: "error",
      });
      dispatch(clearErrors());
    }
  }, [changePassword]);
  useEffect(() => {
    if (tokens) {
      setState({ ...profile });
      passwordEl.current.focus();
    } else {
      setState(initialState);
    }
  }, [tokens, profile]);
  return (
<>
      <UserListStyle />
      <div className="newUser">
        <h1 className="newUserTitle">Change Password</h1>
        <h3 className="newUserAlert">For account security, please do not share your password with others</h3>
        <form className="newUserForm" onSubmit={handleSubmit}>
          <div className="newUserItem">
            <label>OldPassword</label>
            <input
              type="password"
              placeholder="oldPassword"
              name="oldPassword"
              value={oldPassword}
              ref={passwordEl}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="newUserItem">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeInput}
            />
          </div>
          <Link to="/forgetadmin" className="newUserLink">
            <span style={{ color: "#4590ef" }}>
              Forgot Password?
            </span>
          </Link>
          <button className="newUserButton">Change</button>
        </form>
      </div>
    </>
  )
};

export default ChangePasswordAdmins;
