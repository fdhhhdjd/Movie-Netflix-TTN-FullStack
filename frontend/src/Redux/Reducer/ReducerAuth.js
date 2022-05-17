import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  auth: [],
  refreshToken: null,
  logout: false,
  authRegister: [],
  refreshTokens: [],
  profile: [],
  changePassword: [],
  forgetPassword: [],
  resetPassword: [],
  newPassword: [],
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_START:
    case types.LOGIN_FACEBOOK_START:
    case types.REGISTER_API_START:
    case types.REFRESH_TOKEN_START:
    case types.LOGOUT_API_START:
    case types.GET_PROFILE_START:
    case types.CHANGE_PASSWORD_START:
    case types.FORGET_PASS_START:
    case types.RESET_PASSWORD_START:
    case types.NEW_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_API_START:
      return {
        ...state,
      };
    case types.REGISTER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        authRegister: action.payload,
      };

    case types.LOGIN_API_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.LOGIN_FACEBOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    case types.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        logout: true,
        refreshToken: action.payload,
        refreshTokens: action.payload.accessToken,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case types.LOGOUT_API_SUCCESS:
      return {
        ...state,
        loading: false,
        logout: false,
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        changePassword: action.payload,
      };
    case types.NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newPassword: action.payload,
      };
    case types.FORGET_PASS_SUCCESS:
      return {
        ...state,
        loading: false,
        forgetPassword: action.payload,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        resetPassword: action.payload,
      };
    case types.CLEAR_ERRORS_SUCCESS:
      return {
        ...state,
        auth: [],
        authRegister: [],
        changePassword: [],
        forgetPassword: [],
        newPassword: [],
      };
    case types.LOGIN_API_FAIL:
    case types.LOGIN_GOOGLE_FAIL:
    case types.LOGIN_FACEBOOK_FAIL:
    case types.REFRESH_TOKEN_FAIL:
    case types.LOGOUT_API_FAIL:
    case types.GET_PROFILE_FAIL:
    case types.CHANGE_PASSWORD_FAIL:
    case types.FORGET_PASS_FAIL:
    case types.RESET_PASSWORD_FAIL:
    case types.NEW_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;
