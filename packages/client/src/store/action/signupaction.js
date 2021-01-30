import * as types from "../action.type";

export const signUp = (data) => {
  return {
    type: types.SIGN_UP,
    data,
  };
};

export const signUpSuccess = (data) => {
  console.log("datasignUpSuccess", data);
  return {
    type: types.SIGN_UP_SUCCESS,
    data,
  };
};

export const signUpError = (data) => {
  return {
    type: types.SIGN_UP_ERROR,
    data,
  };
};

export const login = (data) => {
  return {
    type: types.LOGIN,
    data,
  };
};
export const loginSucess = (data) => {
  console.log("datasignUpSuccess", data);
  return {
    type: types.LOGIN_SUCCESS,
    data,
  };
};

export const loginError = (data) => {
  return {
    type: types.LOGIN_ERROR,
    data,
  };
};
