import axios from "axios";
export const signUp = (req) => {
  let Packagedata = req.data;
  console.log("Packagedata", Packagedata);
  let data = new FormData();
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  data.append("fullName", Packagedata.fullName);
  data.append("email", Packagedata.Email);
  data.append("PhoneNumber", Packagedata.phoneNumber);
  data.append("Password", Packagedata.Password);
  data.append("ConfirmPassword", Packagedata.ConfirmPassword);
  console.log("req.data", req.data);
  return axios({
    method: "POST",
    url: "http://localhost:5000/createUser",
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
