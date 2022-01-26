  import axios from "axios";
import * as types from '../ActionTypes';
import { toast } from "react-toastify";
//ADMIN API
export const AdminRegisterStart =()=>({
    type:types.REGISTER_ADMIN_API_START,
});
export const AdminRegisterSuccess =(apis)=>({
    type:types.REGISTER_ADMIN_API_SUCCESS,
    payload:apis,
});
export const AdminRegisterFail = (error)=>({
    type:types.REGISTER_ADMIN_API_FAIL,
    payload:error,
})
//ADMIN LOGIN
export const AdminLoginStart =()=>({
    type:types.ADMIN_LOGIN_API_START,
});
export const AdminLoginSuccess =(api)=>({
    type:types.ADMIN_LOGIN_API_SUCCESS,
    payload:api,
});
export const AdminLoginFail = (error)=>({
    type:types.ADMIN_LOGIN_API_FAIL,
    payload:error,
});
//?Login Google
export const AdminLoginGoogleStart = () => ({
    type: types.ADMIN_LOGIN_GOOGLE_START,
  });
  export const AdminLoginGoogleSuccess = (api) => ({
    type: types.ADMIN_LOGIN_GOOGLE_SUCCESS,
    payload: api,
  });
  export const AdminLoginGoogleFail = (error) => ({
    type: types.ADMIN_LOGIN_GOOGLE_FAIL,
    payload: error,
  });
//?Logout AMDIN
export const AdminLogoutStart = () => ({
    type: types.ADMIN_LOGOUT_API_START,
  });
  export const AdminLogoutSuccess = () => ({
    type: types.ADMIN_LOGOUT_API_SUCCESS,
  });
  export const AdminLogoutFail = () => ({
    type: types.ADMIN_LOGOUT_API_FAIL,
  });
//ForgetAdmin
export const AdminForgetStart = () => ({
    type: types.FORGET_ADMIN_START,
  });
  export const AdminForgetSuccess = (api) => ({
    type: types.FORGET_ADMIN_SUCCESS,
    payload: api,
  });
  export const AdminForgetFail = (error) => ({
    type: types.FORGET_ADMIN_FAIL,
    payload: error,
  });
  //?Reset
export const AdminResetPassStart = () => ({
  type: types.ADMIN_RESET_PASSWORD_START,
});
export const AdminResetPassSuccess = (admin) => ({
  type: types.ADMIN_RESET_PASSWORD_SUCCESS,
  payload: admin,
});
export const AdminResetPassFail = (error) => ({
  type: types.ADMIN_RESET_PASSWORD_FAIL,
  payload: error,
});
//ADMIN CALL api
//!Register
export const AdminResgiterInitiate = (
  fullname, email, password, sex, date_of_birth, phone_number

) => {
  return async function (dispatch) {
    dispatch(AdminRegisterStart());
    await axios
      .post("/api/auth/admin/register", {
        fullname, email, password, sex, date_of_birth, phone_number
    
      })
      .then((user) => {
        dispatch(AdminRegisterSuccess(user));
      })
      .catch((error) => {
        dispatch(AdminRegisterFail(toast.error(error.data)));
      });
  };
};
//!Login Admin
export const loginAdminInitiate = (email, password) => async (dispatch) => {
    try {
      dispatch(AdminLoginStart());

      const { data } = await axios.post(`/api/auth/admin/login`, {
        email,
        password,
      });

      dispatch(AdminLoginSuccess(data));
    } catch (error) {
      dispatch(AdminLoginFail(error));
    }
  };
  //!Login Google
export const loginAdminGoogleInitiate = (response) => {
    return async function (dispatch) {
      dispatch(AdminLoginGoogleStart());
      await axios
        .post("/api/auth/loginGoogle", { tokenId: response.tokenId })
        .then((user) => {
          dispatch(
            AdminLoginGoogleSuccess(user.data),
            localStorage.setItem("firstLogin", true)
          );
        })
        .catch((error) => {
          dispatch(AdminLoginGoogleFail(error.data));
        });
    };
  };
  // //!Logout Admin
export const AdminLogoutInitiate = () => async (dispatch) => {
    try {
      dispatch(AdminLogoutStart());

      await axios.get(`/api/auth/admin/logout`);
      dispatch(
        AdminLogoutSuccess(
          localStorage.removeItem("firstLogin"),
          (window.location.href = "/loginadmin")
        )
      );
    } catch (error) {
      dispatch(AdminLoginFail(error));
    }
  };
  //Forget admin
  export const ForgetAdminsInitiate = (email) => async (dispatch) => {
    try {
      dispatch(AdminForgetStart());
  
      const { data } = await axios.post("/api/auth/admin/forget", {
        email,
      });
  
      dispatch(AdminForgetSuccess(data));
    } catch (error) {
      dispatch(AdminForgetFail(error));
    }
  };
  // //!Reset Admin
export const AdminResetPassInitiate =
(token, password, confirmPassword) => async (dispatch) => {
  try {
    dispatch(AdminResetPassStart());

    const { data } = await axios.put(
      `/api/auth/admin/password/reset/${token}`,
      {
        password,
        confirmPassword,
      }
    );

    dispatch(AdminResetPassSuccess(data));
  } catch (error) {
    dispatch(AdminResetPassFail(error));
  }
};
//!CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: types.CLEAR_ERRORS_SUCCESS });
  };