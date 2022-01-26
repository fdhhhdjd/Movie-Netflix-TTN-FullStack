import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAuth";
import AuthAdminReducer from "./Reducer/ReducerAuthAdmin";
const rootReducer = combineReducers({
  auth: AuthReducer,
  admin: AuthAdminReducer,
});
export default rootReducer;
