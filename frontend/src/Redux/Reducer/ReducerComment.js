import * as types from "../ActionTypes";

const initalState = {
  loading: false,
  error: null,
  getAllComment: [],
  addComment: [],
};

const CommentReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_COMMENTS_START:
    case types.ADD_COMMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        getAllComment: action.payload,
      };
    case types.ADD_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        addComment: action.payload,
      };
    case types.GET_COMMENTS_FAIL:
    case types.ADD_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CommentReducer;
