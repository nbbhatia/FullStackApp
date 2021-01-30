import axios from "axios";
export const signUp = (req) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return axios({
    method: "POST",
    url: "http://localhost:8084/createUser",
    data: req.data,
    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
export const LoginService = (req) => {
  let headers = new Headers();
  console.log("req", req);
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return axios({
    method: "POST",
    url: "http://localhost:8084/login",
    data: req.data,
    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
