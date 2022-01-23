import axios from "axios";
import * as types from '../ActionTypes';
//ADMIN API
export const AdminStart =()=>({
    type:types.ADMIN_API_START,
});
export const AdminSuccess =(apis)=>({
    type:types.ADMIN_API_SUCCESS,
    payload:apis,
});
export const AdminFail = (error)=>({
    type:types.ADMIN_API_FAIL,
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
//ADMIN CALL api
export const AdminInitiate =
  (fullname, email, password) => async (dispatch) => {
    try {
      dispatch(AdminStart());

      const { data } = await axios.post(`/api/auth/admin/admin`, {
        fullname,
        email,
        password,
      });

      dispatch(AdminSuccess(data));
    } catch (error) {
      dispatch(AdminFail(error));
    }
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
          (window.location.href = "/login")
        )
      );
    } catch (error) {
      dispatch(AdminLoginFail(error));
    }
  };
  

