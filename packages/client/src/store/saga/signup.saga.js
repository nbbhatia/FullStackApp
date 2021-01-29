import { put, call } from "redux-saga/effects";
import { signUp } from "../service/signUp";
import { signUpSuccess } from "../action/signupaction";
import * as types from "../action.type";
export function* signUpSaga(data) {
  try {
    const response = yield call(signUp, data);

    yield put(signUpSuccess(response.data));
  } catch (error) {
    yield put({ type: types.SIGN_UP_ERROR, error });
  }
}
