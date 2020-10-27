import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "./components/Home";
import Hall from "./components/Hall";
import Feminismo from "./components/Agua/Feminismo";
import Agua from "./components/Agua/Agua";
import useStyles from "./index.styles";
function Router() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hall" component={Hall} />
        <Route exact path="/" component={Home} />
        <Route exact path="/feminismo" component={Feminismo} />
        <Route exact path="/agua" component={Agua} />
      </Switch>
      <BottomNavigation showLabels className={classes.nav}>
        <BottomNavigationAction label="Agradecimientos" />
      </BottomNavigation>
    </BrowserRouter>
  );
}

export default Router;
