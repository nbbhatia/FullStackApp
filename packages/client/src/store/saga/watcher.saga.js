import { takeLatest } from "redux-saga/effects";
import * as types from "../action.type";
import { signUpSaga } from "./signup.saga";
function* watcher() {
  yield takeLatest(types.SIGN_UP, signUpSaga);
}

export default watcher;
