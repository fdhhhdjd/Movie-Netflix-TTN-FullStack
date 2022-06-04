import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  sendFeedBack: [],
  getAllFeedBack: [],
  replyFeedBack: [],
};
const FeedBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_FEEDBACK_START:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        sendFeedBack: action.payload,
      };
    case types.SEND_FEEDBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_FEEDBACK_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        getAllFeedBack: action.payload,
      };
    case types.GET_FEEDBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.REPLY_FEEDBACK_START:
      return {
        ...state,
        loading: true,
      };
    case types.REPLY_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        replyFeedBack: action.payload,
      };
    case types.REPLY_FEEDBACK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CLEAR_ERRORS_SUCCESS:
      return {
        ...state,
        loading: false,
        sendFeedBack: [],
        replyFeedBack: [],
      };
    default:
      return state;
  }
};
export default FeedBackReducer;
