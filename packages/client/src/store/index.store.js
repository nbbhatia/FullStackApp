import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer/index.reducer";
import rootSaga from "./saga/index.saga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeSetup =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  return {
    ...createStore(rootReducer, composeSetup(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
