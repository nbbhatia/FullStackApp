import * as types from "../action.type";
export const SignUpReducer = (state = {}, action) => {
  const response = action.data;
  console.log("response", response);
  switch (action.type) {
    case types.SIGN_UP_SUCCESS:
      return response;
    case types.SIGN_UP_ERROR:
      return state;
    default:
      return state;
  }
};
export const LoginReducer = (state = {}, action) => {
  const response = action.data;
  console.log("responseLoginReducer", response);
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return response;
    case types.LOGIN_ERROR:
      return state;
    default:
      return state;
  }
};
