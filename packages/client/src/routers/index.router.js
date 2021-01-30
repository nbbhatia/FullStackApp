import * as React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../component/signup/signup";
import Login from "../component/login/login";
const IndexRoute = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default IndexRoute;
