import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  SelectFilm: {},
  AdultFilm:[],
  ChildrenFilm:[],
  
};
const AdultReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_AGE_START:
    case types.GET_ALL_ADULT_START:
    case types.GET_ALL_CHILDREN_START:
      return {
        ...state,
        loading: true,
      };
    case types.SELECT_AGE_SUCCESS:
      return {
        ...state,
        loading: false,
        SelectFilm: action.payload,
      };
    case types.GET_ALL_ADULT_SUCCESS:
      return {
        ...state,
        loading: false,
        AdultFilm: action.payload.data,
      };
    case types.GET_ALL_CHILDREN_SUCCESS:
      return {
        ...state,
        loading: false,
        ChildrenFilm: action.payload.data,
      };
    case types.SELECT_AGE_FAIL:
    case types.GET_ALL_ADULT_FAIL:
    case types.GET_ALL_CHILDREN_FAIL:
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
