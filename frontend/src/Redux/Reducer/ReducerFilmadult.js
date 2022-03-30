import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  allFilm: [],
};
const AdultReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ADULT_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_ADULT_SUCCESS:
      return {
        ...state,
        loading: false,
        allFilm: action.payload,
      };
    case types.GET_ALL_ADULT_FAIL:
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
