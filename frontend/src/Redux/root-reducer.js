import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAuth";
import AuthAdminReducer from "./Reducer/ReducerAuthAdmin";
import AdminFilmReducer from "./Reducer/ReducerFilmAdmin"
import FeedBackReducer from './Reducer/ReducerFeedBack'
const rootReducer = combineReducers({
  auth: AuthReducer,
  admin: AuthAdminReducer,
  film:AdminFilmReducer,
  feedback: FeedBackReducer,
});
export default rootReducer;
