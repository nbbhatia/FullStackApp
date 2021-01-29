import * as React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../component/signup/signup";

const IndexRoute = (props) => {
  return (
    <Switch>
      <Route exact path="/SignUp" component={SignUp} />
    </Switch>
  );
};

export default IndexRoute;
