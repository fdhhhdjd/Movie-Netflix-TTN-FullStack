import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
//?get all Categories
export const GetAllCategoryStart = () => ({
  type: types.GET_ALL_CATEGORY_START,
});
export const GetAllCategorySuccess = (token) => ({
  type: types.GET_ALL_CATEGORY_SUCCESS,
  payload: token,
});
export const GetAllCategoryFail = (error) => ({
  type: types.GET_ALL_CATEGORY_FAIL,
  payload: error,
});
//?get all Categories
export const GetAllSeriesFilmStart = () => ({
  type: types.GET_ALL_SERIESFILM_START,
});
export const GetAllSeriesFilmSuccess = (token) => ({
  type: types.GET_ALL_SERIESFILM_SUCCESS,
  payload: token,
});
export const GetAllSeriesFilmFail = (error) => ({
  type: types.GET_ALL_SERIESFILM_FAIL,
  payload: error,
});
export const GetAllFilmStart = () => ({
  type: types.GET_ALL_FILM_START,
});
export const GetAllFilmSuccess = (token) => ({
  type: types.GET_ALL_FILM_SUCCESS,
  payload: token,
});
export const GetAllFilmFail = (error) => ({
  type: types.GET_ALL_FILM_FAIL,
  payload: error,
});
export const GetAllRateStart = () => ({
  type: types.GET_ALL_RATE_START,
});
export const GetAllRateSuccess = (token) => ({
  type: types.GET_ALL_RATE_SUCCESS,
  payload: token,
});
export const GetAllRateFail = (error) => ({
  type: types.GET_ALL_RATE_FAIL,
  payload: error,
});
export const GetAllFavouriteStart = () => ({
  type: types.GET_ALL_FAVOURITE_START,
});
export const GetAllFavouriteSuccess = (token) => ({
  type: types.GET_ALL_FAVOURITE_SUCCESS,
  payload: token,
});
export const GetAllFavouriteFail = (error) => ({
  type: types.GET_ALL_FAVOURITE_FAIL,
  payload: error,
});
export const LoginKidStart = () => ({
  type: types.LOGIN_KID_START,
});
export const LoginKidSuccess = (token) => ({
  type: types.LOGIN_KID_SUCCESS,
  payload: token,
});
export const LoginKidFail = (error) => ({
  type: types.LOGIN_KID_FAIL,
  payload: error,
});
// Film Web User
export const FindFilmStart = () => ({
  type: types.FIND_FILM_START,
});
export const FindFilmSuccess = (token) => ({
  type: types.FIND_FILM_SUCCESS,
  payload: token,
});
export const FindFilmFail = (error) => ({
  type: types.FIND_FILM_FAIL,
  payload: error,
});
// Film FILM BY CATEGORY
export const FindFilmCategoryStart = () => ({
  type: types.FIND_FILM_CATEGORY_START,
});
export const FindFilmCategorySuccess = (token) => ({
  type: types.FIND_FILM_CATEGORY_SUCCESS,
  payload: token,
});
export const FindFilmCategoryFail = (error) => ({
  type: types.FIND_FILM_CATEGORY_FAIL,
  payload: error,
});
//! Get All Category
export const GetAllCategoryInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllCategoryStart());

      const { data } = await axios.get(`/api/category/all`, {
        headers: { Authorization: token },
      });

      dispatch(GetAllCategorySuccess(data.data));
    } catch (error) {
      dispatch(GetAllCategoryFail(error));
    }
  };
};
export const GetAllSeriesFilmInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllSeriesFilmStart());

      const { data } = await axios.get(`/api/film/all`, {
        headers: { Authorization: token },
      });

      dispatch(GetAllSeriesFilmSuccess(data.data));
    } catch (error) {
      dispatch(GetAllSeriesFilmFail(error));
    }
  };
};
export const GetAllFilmInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllFilmStart());

      const { data } = await axios.get(`/api/film/all`, {
        headers: { Authorization: token },
      });

      dispatch(GetAllFilmSuccess(data.data));
    } catch (error) {
      dispatch(GetAllFilmFail(error));
    }
  };
};
export const GetAllRateInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllRateStart());

      const { data } = await axios.get(`/api/rating/all`, {
        headers: { Authorization: token },
      });

      dispatch(GetAllRateSuccess(data.data));
    } catch (error) {
      dispatch(GetAllRateFail(error));
    }
  };
};
export const GetAllFavouriteInitiate = (token) => {
  return async function (dispatch) {
    try {
      dispatch(GetAllFavouriteStart());

      const { data } = await axios.get(`/api/favourite/all`, {
        headers: { Authorization: token },
      });

      dispatch(GetAllFavouriteSuccess(data.data));
    } catch (error) {
      dispatch(GetAllFavouriteFail(error));
    }
  };
};
export const LoginKidInitiate = (i_password, refreshTokens) => {
  return async function (dispatch) {
    try {
      dispatch(LoginKidStart());

      const { data } = await axios.post(
        `/api/film/kid/exit`,
        {
          i_password,
        },
        {
          headers: { Authorization: refreshTokens },
        }
      );

      dispatch(LoginKidSuccess(data));
    } catch (error) {
      dispatch(LoginKidFail(error));
    }
  };
};
// find phim
export const FindFilmInitiate = (id, token) => {
  return async function (dispatch) {
    try {
      dispatch(FindFilmStart());

      const { data } = await axios.get(`/api/film/detail/${id}`, {
        headers: { Authorization: token },
      });

      dispatch(FindFilmSuccess(data.data));
    } catch (error) {
      dispatch(FindFilmFail(error));
    }
  };
};
// find phim by category
export const FindFilmCategoryInitiate = (id, token) => {
  return async function (dispatch) {
    try {
      dispatch(FindFilmCategoryStart());

      const { data } = await axios.get(`/api/film/find/category/${id}`, {
        headers: { Authorization: token },
      });

      dispatch(FindFilmCategorySuccess(data.data));
    } catch (error) {
      dispatch(FindFilmCategoryFail(error));
    }
  };
};
//!CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_SUCCESS });
};
//!CLEAR_ERRORS
export const removeSelectedMovieOrShow = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_DETAIL_SUCCESS });
};
