import * as types from "../ActionTypes";
const initialState = {
    loading: false,
    error: null,
    auth: [],
    refreshToken: null,
    logout: false,
    authAdmin: [],
    refreshTokens: [],
    profile: [],
    changePassword: [],
    forgetPassword: [],
    resetPassword: [],
  };
  const AuthAdminReducer = (state=initialState,action)=>{
      switch (action.type) {
        case types.ADMIN_LOGIN_API_START:
        case types.ADMIN_API_START:
        case types.ADMIN_LOGOUT_API_START:
        case types.ADMIN_LOGIN_API_START:
            return {
                ...state,
            };
        case types.REGISTER_API_SUCCESS:
            return {
                ...state,
                loading: false,
                authAdmin: action.payload,
            };
        case types.LOGIN_GOOGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                auth: action.payload,
            };
        case types.ADMIN_LOGOUT_API_SUCCESS:
            return {
                ...state,
                loading: false,
                logout: false,
            };

        default:
              return state
      }
  }
export default AuthAdminReducer