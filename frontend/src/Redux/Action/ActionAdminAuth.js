import axios from "axios";
import { toast } from "react-toastify";
import * as types from "../ActionTypes";
//?ADMIN API
export const AdminRegisterStart = () => ({
  type: types.REGISTER_ADMIN_API_START,
});
export const AdminRegisterSuccess = (apis) => ({
  type: types.REGISTER_ADMIN_API_SUCCESS,
  payload: apis,
});
export const AdminRegisterFail = (error) => ({
  type: types.REGISTER_ADMIN_API_FAIL,
  payload: error,
});
//?ADMIN LOGIN
export const AdminLoginStart = () => ({
  type: types.ADMIN_LOGIN_API_START,
});
export const AdminLoginSuccess = (api) => ({
  type: types.ADMIN_LOGIN_API_SUCCESS,
  payload: api,
});
export const AdminLoginFail = (error) => ({
  type: types.ADMIN_LOGIN_API_FAIL,
  payload: error,
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
//?Logout admin
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
//? refresh_token
export const RefreshTokenAdminStart = () => ({
  type: types.ADMIN_REFRESH_TOKEN_START,
});
export const RefreshTokenAdminSuccess = (token) => ({
  type: types.ADMIN_REFRESH_TOKEN_SUCCESS,
  payload: token,
});
export const RefreshTokenAdminFail = (error) => ({
  type: types.ADMIN_REFRESH_TOKEN_FAIL,
  payload: error,
});
//? InfoAdmin
export const InfoAdminStart = () => ({
  type: types.ACCEPT_TOKEN_GET_ADMIN_START,
});
export const InfoAdminSuccess = (token) => ({
  type: types.ACCEPT_TOKEN_GET_ADMIN_SUCCESS,
  payload: token,
});
export const InfoAdminFail = (error) => ({
  type: types.ACCEPT_TOKEN_GET_ADMIN_FAIL,
  payload: error,
});
//? Get Profile
export const GetAdminProfileStart = () => ({
  type: types.GET_ADMIN_PROFILE_START,
});
export const GetAdminProfileSuccess = (token) => ({
  type: types.GET_ADMIN_PROFILE_SUCCESS,
  payload: token,
});
export const GetAdminProfileFail = (error) => ({
  type: types.GET_ADMIN_PROFILE_FAIL,
  payload: error,
});
//? ChangePassword
export const ChangePasswordAdminsStart = () => ({
  type: types.CHANGE_ADMIN_PASSWORD_START,
});
export const ChangePasswordAdminsSuccess = (token) => ({
  type: types.CHANGE_ADMIN_PASSWORD_SUCCESS,
  payload: token,
});
export const ChangePasswordAdminsFail = (error) => ({
  type: types.CHANGE_ADMIN_PASSWORD_FAIL,
  payload: error,
});
//? GetAll User
export const GetAllDirectorStart = () => ({
  type: types.GET_ALL_DIRECTOR_START,
});
export const GetAllDirectorSuccess = (token) => ({
  type: types.GET_ALL_DIRECTOR_SUCCESS,
  payload: token,
});
export const GetAllDirectorFail = (error) => ({
  type: types.GET_ALL_DIRECTOR_FAIL,
  payload: error,
});
//? GetAll User
export const GetAllUsersStart = () => ({
  type: types.GET_ALL_USERS_START,
});
export const GetAllUsersSuccess = (token) => ({
  type: types.GET_ALL_USERS_SUCCESS,
  payload: token,
});
export const GetAllUsersFail = (error) => ({
  type: types.GET_ALL_USERS_FAIL,
  payload: error,
});

//ADMIN CALL api
//!Register
export const AdminResgiterInitiate = (
  fullname,
  email,
  password,
  sex,
  date_of_birth,
  phone_number
) => {
  return async function (dispatch) {
    dispatch(AdminRegisterStart());
    await axios
      .post("/api/auth/admin/register", {
        fullname,
        email,
        password,
        sex,
        date_of_birth,
        phone_number,
      })
      .then((user) => {
        dispatch(AdminRegisterSuccess(user.data));
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
//!InfoAdmin
export const InfoAdminInitiate = (token) => {
  return async function (dispatch) {
    dispatch(InfoAdminStart());
    await axios
      .get("/auth/api/admin/profile", {
        headers: { Authorization: ` ${token}` },
      })
      .then((user) => {
        dispatch(InfoAdminSuccess(user.data));
      })
      .catch((error) => {
        dispatch(InfoAdminFail(error.data));
      });
  };
};
// //!Refresh_token
export const RefreshTokenAdminInitiate = (token) => async (dispatch) => {
  try {
    dispatch(RefreshTokenAdminStart());

    const { data } = await axios.get(`/api/auth/admin/refresh_token`, {
      headers: { Authorization: ` ${token}` },
    });

    dispatch(RefreshTokenAdminSuccess(data));
  } catch (error) {
    dispatch(RefreshTokenAdminFail(error));
  }
};
// //!profile
export const ProfileAdminInitiate = (token) => async (dispatch) => {
  try {
    dispatch(GetAdminProfileStart());

    const { data } = await axios.get(`/api/auth/admin/profile`, {
      headers: { Authorization: token },
    });

    dispatch(GetAdminProfileSuccess(data));
  } catch (error) {
    dispatch(GetAdminProfileFail(error));
  }
};
//!ChangePassword
export const ChangeAdminsInitiate =
  (token, { ...state }) =>
  async (dispatch) => {
    try {
      dispatch(ChangePasswordAdminsStart());
      const { data } = await axios.patch(
        `/api/auth/admin/changePassword`,
        { ...state },
        {
          headers: { Authorization: token },
        }
      );
      dispatch(ChangePasswordAdminsSuccess(data));
    } catch (error) {
      dispatch(ChangePasswordAdminsFail(error));
    }
  };
//!Get All Director
export const GetAllDirectorInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllDirectorStart());

      const { data } = await axios.get(`/api/director/all`, {
        headers: { Authorization: token },
      });

      dispatch(GetAllDirectorSuccess(data.data));
    } catch (error) {
      dispatch(GetAllDirectorFail(error));
    }
  };
};
export const GetAllUsersInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllUsersStart());

      const { data } = await axios.get(`/api/auth/admin/getAllCustomer`, {
        headers: { Authorization: token },
      });

      dispatch(GetAllUsersSuccess(data.data));
    } catch (error) {
      dispatch(GetAllUsersFail(error));
    }
  };
};
//!CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_SUCCESS });
};
