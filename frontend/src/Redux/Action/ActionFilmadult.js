import axios from "axios";
import * as types from "../ActionTypes";
//?Get all Adult
export const GetAllAdultStart = () => ({
  type: types.GET_ALL_ADULT_START,
});
export const GetAllAdultSuccess = (token) => ({
  type: types.GET_ALL_ADULT_SUCCESS,
  payload: token,
});
export const GetAllAdultFail = (error) => ({
  type: types.GET_ALL_ADULT_FAIL,
  payload: error,
});
//! Get all Adult
export const GetAllAdultInitiate = (adult, refreshTokens) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllAdultStart());

      const { data } = await axios.post(
        `/api/film/selectForAdultOrChild`,
        {
          adult,
        },
        {
          headers: { Authorization: refreshTokens },
        }
      );

      dispatch(GetAllAdultSuccess(data.data));
    } catch (error) {
      dispatch(GetAllAdultFail(error));
    }
  };
};
