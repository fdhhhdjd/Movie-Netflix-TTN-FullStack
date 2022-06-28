import axios from "axios";
import * as types from "../ActionTypes";
//?Update Adult
export const CheckPaymentStart = () => ({
    type: types.CHECK_PAYMENT_START,
  });
  export const CheckPaymentSuccess = (token) => ({
    type: types.CHECK_PAYMENT_SUCCESS,
    payload: token,
  });
  export const CheckPaymentFail = (error) => ({
    type: types.CHECK_PAYMENT_FAIL,
    payload: error,
  });
export const CreateBillStart = () => ({
    type: types.CREATE_BILL_START,
  });
  export const CreateBillSuccess = (token) => ({
    type: types.CREATE_BILL_SUCCESS,
    payload: token,
  });
  export const CreateBillFail = (error) => ({
    type: types.CREATE_BILL_FAIL,
    payload: error,
  });
export const GetAllModePaymentStart = () => ({
    type: types.GET_ALL_MODE_PAYMENT_START,
  });
  export const GetAllModePaymentSuccess = (token) => ({
    type: types.GET_ALL_MODE_PAYMENT_SUCCESS,
    payload: token,
  });
  export const GetAllModePaymentFail = (error) => ({
    type: types.GET_ALL_MODE_PAYMENT_FAIL,
    payload: error,
  });
  export const CheckPaymentInitiate = (id, refreshTokens) => {
    return async function (dispatch) {
      try {
        dispatch(CheckPaymentStart());

        const { data } = await axios.get(`/api/bill/checkCanWatchFilm/${id}`, {
          headers: { Authorization: refreshTokens },
        });
        console.log("dataCheckPaymentdataCheckPaymentdataCheckPaymentdataCheckPayment",data)
        dispatch(CheckPaymentSuccess(data));
      } catch (error) {
        dispatch(CheckPaymentFail(error));
      }
    };
  };
  export const CreateBillInitiate = (refreshTokens) => {
    return async function (dispatch) {
      try {
        dispatch(CreateBillStart());

        const { data } = await axios.get(`/api/bill/Paypal/create`, {
          headers: { Authorization: refreshTokens },
        });
        console.log("create_bill",data)
        dispatch(CreateBillSuccess(data));
      } catch (error) {
        dispatch(CreateBillFail(error));
      }
    };
  };
  export const GetAllModePaymentInitiate = (refreshTokens) => {
    return async function (dispatch) {
      try {
        dispatch(GetAllModePaymentStart());

        const { data } = await axios.get(`/api/modeOfPayment/all`, {
          headers: { Authorization: refreshTokens },
        });
        console.log("GetAllModePayment",data)
        dispatch(GetAllModePaymentSuccess(data));
      } catch (error) {
        dispatch(GetAllModePaymentFail(error));
      }
    };
  };