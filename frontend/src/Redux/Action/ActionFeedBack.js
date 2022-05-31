import axios from "axios";
import * as types from "../ActionTypes";

//sendfeedback
export const SendFeedBackStart = () => ({
  type: types.SEND_FEEDBACK_START,
});
export const SendFeedBackSuccess = (token) => ({
  type: types.SEND_FEEDBACK_SUCCESS,
  payload: token,
});
export const SendFeedBackFail = (error) => ({
  type: types.SEND_FEEDBACK_FAIL,
  payload: error,
});
//Getallfeedback
export const GetAllFeedBackStart = () => ({
  type: types.GET_FEEDBACK_START,
});
export const GetAllFeedBackSuccess = (token) => ({
  type: types.GET_FEEDBACK_SUCCESS,
  payload: token,
});
export const GetAllFeedBackFail = (error) => ({
  type: types.GET_FEEDBACK_FAIL,
  payload: error,
});
//Reply feedback
export const ReplyFeedBackStart = () => ({
  type: types.REPLY_FEEDBACK_START,
});
export const ReplyFeedBackSuccess = (token) => ({
  type: types.REPLY_FEEDBACK_SUCCESS,
  payload: token,
});
export const ReplyFeedBackFail = (error) => ({
  type: types.REPLY_FEEDBACK_FAIL,
  payload: error,
});

export const SendFeedBackInitiate =
  ({ ...state }) =>
  async (dispatch) => {
    try {
      dispatch(SendFeedBackStart());
      const { data } = await axios.post("api/feedback/send", {
        ...state,
      });
      dispatch(SendFeedBackSuccess(data));
    } catch (error) {
      dispatch(SendFeedBackFail(error));
    }
  };
export const GetAllFeedBackInitiate = (token) => async (dispatch) => {
  try {
    dispatch(GetAllFeedBackStart());
    const { data } = await axios.get("/api/feedback/all", {
      headers: { Authorization: token },
    });

    dispatch(GetAllFeedBackSuccess(data.data));
  } catch (error) {
    dispatch(GetAllFeedBackFail(error));
  }
};
export const ReplyFeedBackInitiate =
  (token, response_content) => async (dispatch) => {
    try {
      dispatch(ReplyFeedBackStart());
      const { data } = await axios.post(`/api/feedback/response/${token}`, {
        response_content,
      });

      dispatch(ReplyFeedBackSuccess(data.data));
    } catch (error) {
      dispatch(ReplyFeedBackFail(error));
    }
  };
//!CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_SUCCESS });
};
