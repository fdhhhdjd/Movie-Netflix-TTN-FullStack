import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAuth";
const rootReducer = combineReducers({
  auth: AuthReducer,
});
export default rootReducer;
