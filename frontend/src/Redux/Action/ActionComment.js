import axios from "axios";
import * as types from "../ActionTypes";

//* get all comments
export const getCommentsStart = () => ({
  type: types.GET_COMMENTS_START,
});
export const getCommentsSuccess = (data) => ({
  type: types.GET_COMMENTS_SUCCESS,
  payload: data,
});
export const getCommentsFail = (error) => ({
  type: types.GET_COMMENTS_FAIL,
  payload: error,
});

//* add comments
export const addCommentsStart = () => ({
  type: types.ADD_COMMENTS_START,
});
export const addCommentsSuccess = (data) => ({
  type: types.ADD_COMMENTS_SUCCESS,
  payload: data,
});
export const addCommentsFail = (err) => ({
  type: types.ADD_COMMENTS_FAIL,
  payload: err,
});

//* update comments
export const updateCommentsStart = () => ({
  type: types.UPDATE_COMMENTS_START,
});
export const updateCommentsSuccess = (data) => ({
  type: types.UPDATE_COMMENTS_SUCCESS,
  payload: data,
});
export const updateCommentsFail = (err) => ({
  type: types.UPDATE_COMMENTS_FAIL,
  payload: err,
});
export const  getCommentInitiate= (id,refreshTokens) => async (dispatch) => {
  try {
    dispatch(getCommentsStart());

    const { data } = await axios.get(`/api/comment/get/${id}`, {
      headers: { Authorization: refreshTokens},
    });

    dispatch(getCommentsSuccess(data));
  } catch (error) {
    dispatch(getCommentsFail(error));
  } 
};



export const addCommentInitiate = (token, id) => async (dispatch) => {
  try {
    dispatch(addCommentsStart());
    const { data } = await axios.get(`/api/comment/add/${id}`, {
      headers: { Authorization: token },
    });

    dispatch(getCommentsSuccess(data.data));
  } catch (err) {
    dispatch(addCommentsFail(err));
  }
};
