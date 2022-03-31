import axios from "axios";
import * as types from "../ActionTypes";
//?Select Adult
export const SelectAgeStart = () => ({
  type: types.SELECT_AGE_START,
});
export const SelectAgeSuccess = (token) => ({
  type: types.SELECT_AGE_SUCCESS,
  payload: token,
});
export const SelectAgeFail = (error) => ({
  type: types.SELECT_AGE_FAIL,
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
//?Get all Adult
export const GetAllChildrenStart = () => ({
  type: types.GET_ALL_CHILDREN_START,
});
export const GetAllChildrenSuccess = (token) => ({
  type: types.GET_ALL_CHILDREN_SUCCESS,
  payload: token,
});
export const GetAllChildrenFail = (error) => ({
  type: types.GET_ALL_CHILDREN_FAIL,
  payload: error,
});
//! Get all Adult
export const SelectAgetInitiate = (adult, refreshTokens) => {
  return async function (dispatch) {
    try {
      dispatch(SelectAgeStart());

      const { data } = await axios.post(
        `/api/film/selectForAdultOrChild`,
        {
          adult,
        },
        {
          headers: { Authorization: refreshTokens },
        }
      );

      dispatch(SelectAgeSuccess(data));
    } catch (error) {
      dispatch(SelectAgeFail(error));
    }
  };
};
//! Get all Adult
export const GetAllAdultInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllAdultStart());

      const { data } = await axios.get(
        `/api/film/adult`,
        {
          headers: { Authorization: token},
        }
      );

      dispatch(GetAllAdultSuccess(data));
    } catch (error) {
      dispatch(GetAllAdultFail(error));
    }
  };
};
//! Get all Adult
export const GetAllChildrenInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllChildrenStart());

      const { data } = await axios.get(
        `/api/film/kid`,
        {
          headers: { Authorization: token },
        }
      );

      dispatch(GetAllChildrenSuccess(data));
    } catch (error) {
      dispatch(GetAllChildrenFail(error));
    }
  };
};
