import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  token: [],
  Admin: [],
  AdminRegister: [],
  isLogout: false,
  changePassword: [],
  uploadImg: [],
  allAdmins: [],
  forget: [],
  newAccount: [],
  allDirectors: [],
  allUsers: [],
  resetPassword:[],

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
    case types.ACCEPT_TOKEN_GET_ADMIN_START:
        return{
            ...state,
            loading: true,
        }

    case types.GET_ADMIN_PROFILE_START:
        return{
            ...state,
            loading: true,
        }
    case types.ADMIN_REFRESH_TOKEN_START:
        return{
            ...state,
            loading: true,
        }
    case types.CHANGE_ADMIN_PASSWORD_START:
      return{
        ...state,
        loading: true,
    }
    case types.GET_ALL_DIRECTOR_START:
      return{
        ...state,
        loading: true,
    }
    case types.GET_ALL_USERS_START:
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
      case types.ADMIN_REFRESH_TOKEN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload,
       
        };
        
                 case types.GET_ADMIN_PROFILE_SUCCESS:
              return {
                ...state,
                loading: false,
                profile: action.payload,
              };
              case types.GET_ALL_DIRECTOR_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  allDirectors: action.payload,
                  
                };
              case types.GET_ALL_USERS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  allUsers: action.payload,
                  
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

   

            case types.CHANGE_ADMIN_PASSWORD_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  changePassword: action.payload,

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
        case types.ACCEPT_TOKEN_GET_ADMIN_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.GET_ADMIN_PROFILE_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.ADMIN_REFRESH_TOKEN_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.CHANGE_ADMIN_PASSWORD_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.GET_ALL_DIRECTOR_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.GET_ALL_USERS_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload
        }
        case types.CLEAR_ERRORS_SUCCESS :
        return{
            ...state,
            loading: false,
            changePassword: []
        }

        default:
              return state
      }
  }
export default AuthAdminReducer 