import { fork } from "redux-saga/effects";
import watchSagas from "./watcher.saga";

function* startForman() {
  yield fork(watchSagas);
}

export default startForman;
