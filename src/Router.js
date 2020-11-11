import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "./components/Home";
import Hall from "./components/Hall";
import Feminismo from "./components/Agua/Feminismo";
import Agua from "./components/Agua/Agua";
import Fuego from "./components/Fuego/Fuego";
import Aire from "./components/Aire/Aire";
import Tierra from "./components/Tierra/Tierra";
import Magia from "./components/Amm/Magia";
import Cine from "./components/Fuego/Cine";
import Arte from "./components/Agua/Arte";
import Politica from "./components/Aire/Politica";
import Filos from "./components/Aire/Filos";
import useStyles from "./index.styles";

function Router() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hall" component={Hall} />
        <Route exact path="/" component={Home} />
        <Route exact path="/agua" component={Agua} />
        <Route exact path="/fuego" component={Fuego} />
        <Route exact path="/aire" component={Aire} />
        <Route exact path="/tierra" component={Tierra} />
        <Route exact path="/cine" component={Cine} />
        <Route exact path="/arte" component={Arte} />
        <Route exact path="/feminismo" component={Feminismo} />
        <Route exact path="/politica" component={Politica} />
        <Route exact path="/filos" component={Filos} />
        <Route exact path="/magia" component={Magia} />
      </Switch>
      <BottomNavigation showLabels className={classes.root}>
        <BottomNavigationAction label="Agradecimientos" />
      </BottomNavigation>
    </BrowserRouter>
  );
}

export default Router;
