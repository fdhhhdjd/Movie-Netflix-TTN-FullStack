import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAuth";
import AuthAdminReducer from "./Reducer/ReducerAuthAdmin";
import AdminFilmReducer from "./Reducer/ReducerFilmAdmin";
import FeedBackReducer from "./Reducer/ReducerFeedBack";
import ReducerFilmAdult from "./Reducer/ReducerFilmadult";
import CommentReducer from "./Reducer/ReducerComment";
import ReducerDirector from "./Reducer/ReducerDirector";
import PaymentReducer from "./Reducer/ReducerPayment";

const rootReducer = combineReducers({
  auth: AuthReducer,
  admin: AuthAdminReducer,
  film: AdminFilmReducer,
  feedback: FeedBackReducer,
  adult: ReducerFilmAdult,
  comment: CommentReducer,
  director: ReducerDirector,
  payment: PaymentReducer,
});

export default rootReducer;
