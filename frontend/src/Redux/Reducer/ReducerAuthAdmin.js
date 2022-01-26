import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  token: [],
  Admin: [],
  AdminRegister: [],
  isLogout: false,
  InfoAdmin: [],
  changePassword: [],
  allUser: [],
  allUsers: [],
  uploadImg: [],
  allAdmins: [],
  forget: [],
  newAccount: [],
  resetPassword: [],
  };
  const AuthAdminReducer = (state=initialState,action)=>{
      switch (action.type) {
    case types.ADMIN_LOGIN_API_START:
        return{
            ...state,
            loading: true,
        }
    case types.REGISTER_ADMIN_API_START:
        return{
            ...state,
            loading: true,
        }
    case types.FORGET_ADMIN_START:
        return{
            ...state,
            loading: true,
        }
    case types.ADMIN_RESET_PASSWORD_START:
        return{
            ...state,
            loading: true,
        }
    case types.ADMIN_LOGIN_API_SUCCESS:
      return {
        ...state,
        loading: false,
        Admin: action.payload,
      };
      case types.ADMIN_RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          resetPassword: action.payload,
        };
      case types.REGISTER_ADMIN_API_SUCCESS:
        return {
          ...state,
          loading: false,
          AdminRegister: action.payload,
        };
      case types.FORGET_ADMIN_SUCCESS:
          return {
            ...state,
            loading: false,
            forget: action.payload,
          };
      case types.ADMIN_LOGIN_API_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload

        }
        case types.REGISTER_ADMIN_API_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.FORGET_ADMIN_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.ADMIN_RESET_PASSWORD_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        default:
              return state
      }
  }
export default AuthAdminReducer 