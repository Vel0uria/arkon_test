import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Hall from "./components/Hall";
import Feminismo from "./components/Feminismo";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hall" component={Hall} />
        <Route exact path="/" component={Home} />
        <Route exact path="/feminismo" component={Feminismo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
