import axios from "axios";
import * as types from "../ActionTypes";
//?Update Adult
export const UpdateAdultStart = () => ({
  type: types.UPLOAD_ADULT_START,
});
export const UpdateAdultSuccess = (token) => ({
  type: types.UPLOAD_ADULT_SUCCESS,
  payload: token,
});
export const UpdateAdultFail = (error) => ({
  type: types.UPLOAD_ADULT_FAIL,
  payload: error,
});
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
//?Get all Kid
export const GetAllKidStart = () => ({
  type: types.GET_ALL_ADULT_START,
});
export const GetAllKidSuccess = (token) => ({
  type: types.GET_ALL_ADULT_SUCCESS,
  payload: token,
});
export const GetAllKidFail = (error) => ({
  type: types.GET_ALL_ADULT_FAIL,
  payload: error,
});
//!Update Adult
export const UpdateAdultInitiate = (adult, refreshTokens) => {
  return async function (dispatch) {
    try {
      dispatch(UpdateAdultStart());
      const { data } = await axios.post(
        `/api/film/selectForAdultOrChild`,
        {
          adult,
        },
        {
          headers: { Authorization: refreshTokens },
        }
      );

      dispatch(UpdateAdultSuccess(data));
    } catch (error) {
      dispatch(UpdateAdultFail(error));
    }
  };
};
//! Get all Adult
export const GetAllAdultInitiate = (refreshTokens) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllAdultStart());
      const { data } = await axios.get(`/api/film/adult`, {
        headers: { Authorization: refreshTokens },
      });

      dispatch(GetAllAdultSuccess(data?.data));
    } catch (error) {
      dispatch(GetAllAdultFail(error));
    }
  };
};
//! Get all Kid
export const GetAllKidInitiate = (refreshTokens) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllKidStart());
      const { data } = await axios.get(`/api/film/kid`, {
        headers: { Authorization: refreshTokens },
      });

      dispatch(GetAllKidSuccess(data?.data));
    } catch (error) {
      dispatch(GetAllKidFail(error));
    }
  };
};
