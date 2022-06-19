import * as types from "../ActionTypes";
const initalState = {
  loading: false,
  error: null,
  InfoDirector: [],
  DetailInfoDirector: [],
};

const DirectorReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_INFORMATION_DIRECTOR_START:
    case types.GET_DETAIL_INFORMATION_DIRECTOR_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_INFORMATION_DIRECTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        InfoDirector: action.payload,
      };
    case types.GET_DETAIL_INFORMATION_DIRECTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        DetailInfoDirector: action.payload,
      };
    case types.GET_INFORMATION_DIRECTOR_FAIL:
    case types.GET_DETAIL_INFORMATION_DIRECTOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DirectorReducer;
