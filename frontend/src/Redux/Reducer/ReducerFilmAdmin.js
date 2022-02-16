import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  categories: [],

  film:[],
  rating:[],
  favourite:[],
};
const AdminFilmReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_ALL_CATEGORY_START:
        return {
          ...state,
          loading: true,
        }
      case types.GET_ALL_SERIESFILM_START:
        return {
          ...state,
          loading: true,
        }
      case types.GET_ALL_FILM_START:
        return {
          ...state,
          loading: true,
        }
      case types.GET_ALL_RATE_START:
        return {
          ...state,
          loading: true,
        }
      case types.GET_ALL_FAVOURITE_START:
        return {
          ...state,
          loading: true,
        }
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
      default:
        return state;
    }
  };
  export default AdminFilmReducer;  