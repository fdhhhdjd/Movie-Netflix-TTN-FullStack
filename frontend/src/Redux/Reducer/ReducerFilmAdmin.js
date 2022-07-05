import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  categories: [],
  verifiedPassword: [],
  film: [],
  rating: [],
  favourite: [],
  findFilm: [],
  allComments:[],
  CommentsOfFilm:[],
};
const AdminFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_SERIESFILM_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_FILM_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_RATE_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_FAVOURITE_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_KID_START:
      return {
        ...state,
        loading: true,
      };
    case types.FIND_FILM_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_COMMENT_START:
      return {
        ...state,
        loading: true,
      };
    case types.COMMENT_OF_FILM_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case types.GET_ALL_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        film: action.payload,
      };
    case types.GET_ALL_RATE_SUCCESS:
      return {
        ...state,
        loading: false,
        rating: action.payload,
      };
    case types.GET_ALL_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        favourite: action.payload,
      };
    case types.LOGIN_KID_SUCCESS:
      return {
        ...state,
        loading: false,
        verifiedPassword: action.payload,
      };
    case types.FIND_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        findFilm: action.payload,
      };
    case types.GET_ALL_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        allComments: action.payload,
      };
    case types.COMMENT_OF_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        CommentsOfFilm: action.payload,
      };

    case types.GET_ALL_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ALL_SERIESFILM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ALL_FILM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ALL_RATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ALL_FAVOURITE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOGIN_KID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.FIND_FILM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_ALL_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.COMMENT_OF_FILM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.CLEAR_ERRORS_SUCCESS:
      return {
        ...state,
        loading: false,
        film: [],
        rating: [],
        favourite: [],
        categories: [],
        verifiedPassword: [],
        CommentsOffilm:[],
      };
    case types.CLEAR_ERRORS_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        findFilm: [],
      };
    default:
      return state;
  }
};
export default AdminFilmReducer;
