import { combineReducers } from "redux";
import { SignUpReducer, LoginReducer } from "./signUpreducer";
const rootReducer = combineReducers({
  SignUpReducer,
  LoginReducer,
});

export default rootReducer;
