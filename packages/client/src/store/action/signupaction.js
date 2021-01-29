import * as types from "../action.type";

export const signUp = (data) => {
  console.log("data", data);
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
