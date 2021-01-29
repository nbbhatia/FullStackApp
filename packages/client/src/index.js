import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Provider } from "react-redux";
import "./index.css";
import App from "./root/App";

import configureStore from "./store/index.store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        <App />
        {/* </MuiPickersUtilsProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
