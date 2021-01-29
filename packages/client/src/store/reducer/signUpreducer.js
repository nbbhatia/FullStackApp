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
