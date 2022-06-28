import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  checkPayment:[],
  createBill:[],
  modeOfPayment:[],
};
const CheckPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_PAYMENT_START:
    case types.CREATE_BILL_START:
    case types.GET_ALL_MODE_PAYMENT_START:
      return {
        ...state,
        loading: true,
      };
    case types.CHECK_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        checkPayment: action.payload,
      };
    case types.CREATE_BILL_SUCCESS:
      return {
        ...state,
        loading: false,
        createBill: action.payload,
      };
    case types.GET_ALL_MODE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        modeOfPayment: action.payload,
      };

    case types.CHECK_PAYMENT_FAIL:
    case types.CREATE_BILL_FAIL:
    case types.GET_ALL_MODE_PAYMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default CheckPaymentReducer;