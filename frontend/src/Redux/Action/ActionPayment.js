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
export const PaypalStart = () => ({
  type: types.PAYMENT_PAYPAL_START,
});
export const PaypalSuccess = (token) => ({
  type: types.PAYMENT_PAYPAL_SUCCESS,
  payload: token,
});
export const PaypalFail = (error) => ({
  type: types.PAYMENT_PAYPAL_FAIL,
  payload: error,
});
export const CheckPaymentInitiate = (id, refreshTokens) => {
  return async function (dispatch) {
    try {
      dispatch(CheckPaymentStart());

      const { data } = await axios.get(`/api/bill/checkCanWatchFilm/${id}`, {
        headers: { Authorization: refreshTokens },
      });

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
      dispatch(GetAllModePaymentSuccess(data));
    } catch (error) {
      dispatch(GetAllModePaymentFail(error));
    }
  };
};
export const PaypalInitiate = ({
  refreshTokens,
  mode_of_payment,
  id_payment,
  filmId,
  price,
}) => {
  console.log(refreshTokens, mode_of_payment, id_payment, filmId, price);
  return async function (dispatch) {
    try {
      dispatch(PaypalStart());

      const { data } = await axios.post(
        `/api/bill/Paypal/create/`,
        {
          mode_of_payment,
          id_payment,
          filmId,
          price,
        },
        {
          headers: { Authorization: refreshTokens },
        }
      );
      dispatch(PaypalSuccess(data));
    } catch (error) {
      dispatch(PaypalFail(error));
    }
  };
};
