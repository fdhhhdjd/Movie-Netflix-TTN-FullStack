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

//* remove comments
export const removeCommentsStart = () => ({
  type: types.REMOVE_COMMENTS_FAIL,
});

export const removeCommentsSuccess = () => ({
  type: types.REMOVE_COMMENTS_SUCCESS,
});

export const removeCommentsFail = (err) => ({
  type: types.REMOVE_COMMENTS_FAIL,
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

//* ADD Rating
export const addRatingStart = () => ({
  type: types.ADD_RATING_START,
});

export const addRatingSuccess = () => ({
  type: types.ADD_RATING_SUCCESS,
});

export const addRatingFail = () => ({
  type: types.ADD_RATING_FAIL,
});

//* Toggle Fav
export const toggleFavStart = () => ({
  type: types.TOGGLE_FAV_START,
});

export const toggleFavSucess = () => ({
  type: types.TOGGLE_FAV_SUCCESS,
});

export const toggleFavFail = () => ({
  type: types.TOGGLE_FAV_FAIL,
});

export const getCommentInitiate = (id, refreshTokens) => async (dispatch) => {
  try {
    dispatch(getCommentsStart());

    const { data } = await axios.get(`/api/comment/get/${id}`, {
      headers: { Authorization: refreshTokens },
    });

    dispatch(getCommentsSuccess(data?.data));
  } catch (error) {
    dispatch(getCommentsFail(error));
  }
};

export const addCommentInitiate =
  (id, refreshTokens, content) => async (dispatch) => {
    try {
      dispatch(addCommentsStart());

      const { data } = await axios.post(
        `/api/comment/add/${id}`,
        {
          content,
        },
        {
          headers: { Authorization: refreshTokens },
        }
      );

      dispatch(addCommentsSuccess(data));
    } catch (error) {
      dispatch(addCommentsFail(error));
    }
  };

export const removeCommentInitiate = (token, id) => async (dispatch) => {
  try {
    dispatch(removeCommentsStart());

    const { data } = await axios.patch(
      `api/comment/softDelete/${id}`,
      {},
      {
        headers: { Authorization: token },
      }
    );

    dispatch(removeCommentsSuccess(data));
  } catch (error) {
    dispatch(removeCommentsFail(error));
  }
};

export const resetCommentState = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_COMMENT });
};

export const addRatingInitial = () => async (dispatch) => {
  // try {
  //   dispatch(addRatingStart);
  //   const {data}  = await axios.
  // } catch (error) {
  // }
};

// export const toggleFavInitial = (token, id) => async (dispatch) => {
//   try {
//     dispatch(toggleFavStart());

//     const { data } = await axios.post(`/favourite/add/${id}`, {
//       headers: { Authorization: token },
//     });

//     dispatch(toggleFavSucess(data))
//   } catch (error) {}
// };
