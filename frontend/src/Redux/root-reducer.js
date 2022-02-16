import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAuth";
import AuthAdminReducer from "./Reducer/ReducerAuthAdmin";
import AdminFilmReducer from "./Reducer/ReducerFilmAdmin"
const rootReducer = combineReducers({
  auth: AuthReducer,
  admin: AuthAdminReducer,
  film:AdminFilmReducer
});
export default rootReducer;
