import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Hall from "./components/Hall";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hall" component={Hall} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
