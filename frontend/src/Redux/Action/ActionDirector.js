import axios from "axios";
import * as types from "../ActionTypes";
//* get all comments
export const getInfomationDirectorStart = () => ({
    type: types.GET_INFORMATION_DIRECTOR_START,
  });
  export const getInfomationDirectorSuccess = (token) => ({
    type: types.GET_INFORMATION_DIRECTOR_SUCCESS,
    payload: token,
  });
  export const getInfomationDirectorFail = (error) => ({
    type: types.GET_INFORMATION_DIRECTOR_FAIL,
    payload: error,
  });
export const getDetailInfomationDirectorStart = () => ({
    type: types.GET_DETAIL_INFORMATION_DIRECTOR_START,
  });
  export const getDetailInfomationDirectorSuccess = (token) => ({
    type: types.GET_DETAIL_INFORMATION_DIRECTOR_SUCCESS,
    payload: token,
  });
  export const getDetailInfomationDirectorFail = (error) => ({
    type: types.GET_DETAIL_INFORMATION_DIRECTOR_FAIL,
    payload: error,
  });
  export const getInfomationDirectorInitiate = (refreshTokens) => {
    
    return async function (dispatch) {
      try {
        dispatch(getInfomationDirectorStart());
        const { data } = await axios.get(`/api/director/all`, {
          headers: { Authorization: refreshTokens },
        });
   
        dispatch(getInfomationDirectorSuccess(data?.data));
      } catch (error) {
        dispatch(getInfomationDirectorFail(error));
      }
    };
  }

  export const getDetailInfomationDirectorInitiate = (id, refreshTokens) => {
    console.log("ttdirector",id,refreshTokens)
    return async function (dispatch) {
      try {
        dispatch(getDetailInfomationDirectorStart());

        const { data } = await axios.get(`/api/director/${id}`, {
          headers: { Authorization: refreshTokens },
        });
        console.log("datadirector",data?.data)
        dispatch(getDetailInfomationDirectorSuccess(data?.data));
      } catch (error) {
        dispatch(getDetailInfomationDirectorFail(error));
      }
    };
  };
