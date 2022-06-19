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
//?Get film by category film kid 
export const FindFilmCateKidStart = () => ({
  type: types.GET_FILM_CATEGORY_KID_START,
});
export const FindFilmCateKidSuccess = (token) => ({
  type: types.GET_FILM_CATEGORY_KID_SUCCESS,
  payload: token,
});
export const FindFilmCateKidFail = (error) => ({
  type: types.GET_FILM_CATEGORY_KID_FAIL,
  payload: error,
});
//?Get film by category film adult 
export const FindFilmCateAdultStart = () => ({
  type: types.GET_FILM_CATEGORY_ADULT_START,
});
export const FindFilmCateAdultSuccess = (token) => ({
  type: types.GET_FILM_CATEGORY_ADULT_SUCCESS,
  payload: token,
});
export const FindFilmCateAdultFail = (error) => ({
  type: types.GET_FILM_CATEGORY_ADULT_FAIL,
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
//?Get film by category film adult 
export const FindFilmCateAdultInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(FindFilmCateAdultStart());
      const { data } = await axios.get(`/api/film/adult/eachCategory`, {
        headers: { Authorization: token },
      });
  
      dispatch(FindFilmCateAdultSuccess(data.results));
    } catch (error) {
      dispatch(FindFilmCateAdultFail(error));
    }
  };
};
//?Get film by category film kid 
export const FindFilmCateKidInitiate = ( token) => {
  return async function (dispatch) {
    try {
      dispatch(FindFilmCateKidStart());
      const { data } = await axios.get(`/api/film/kid/eachCategory`, {
        headers: { Authorization: token },
      });
      
      dispatch(FindFilmCateKidSuccess(data.results));
    } catch (error) {
      dispatch(FindFilmCateKidFail(error));
    }
  };
};


