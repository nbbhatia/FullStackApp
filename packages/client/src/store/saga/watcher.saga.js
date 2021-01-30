import { takeLatest } from "redux-saga/effects";
import * as types from "../action.type";
import { signUpSaga, loginSaga } from "./signup.saga";
function* watcher() {
  yield takeLatest(types.SIGN_UP, signUpSaga);
  yield takeLatest(types.LOGIN, loginSaga);
}

export default watcher;
