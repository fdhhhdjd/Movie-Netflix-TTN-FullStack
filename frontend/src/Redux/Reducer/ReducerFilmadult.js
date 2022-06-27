import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  updateAdult: [],
  allFilmAdult: [],
  findFilmAdult: [],
};
const AdultReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_ADULT_START:
    case types.GET_ALL_ADULT_START:
    case types.GET_ALL_KID_START:
    case types.GET_FILM_CATEGORY_ADULT_START:
    case types.GET_FILM_CATEGORY_KID_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPLOAD_ADULT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateAdult: action.payload,
      };
    case types.GET_ALL_ADULT_SUCCESS:
    case types.GET_ALL_KID_SUCCESS:
      return {
        ...state,
        loading: false,
        allFilmAdult: action.payload,
      };
    case types.GET_FILM_CATEGORY_ADULT_SUCCESS:
    case types.GET_FILM_CATEGORY_KID_SUCCESS:
      return {
        ...state,
        loading: false,
        findFilmAdult: action.payload,
      };
    
    case types.UPLOAD_ADULT_FAIL:
    case types.GET_ALL_ADULT_FAIL:
    case types.GET_ALL_KID_FAIL:
    case types.GET_FILM_CATEGORY_ADULT_FAIL:
    case types.GET_FILM_CATEGORY_KID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AdultReducer;
