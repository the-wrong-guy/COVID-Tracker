import React from "react";
import Prevention from "./Main Components/Prevention/prevention";
import What from "./Main Components/What is COVID/what";
import Home from "./Main Components/Home/App";
import Global from "./Main Components/Global Analytics/app";
// import Error from "./components/error";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact from="/" component={Home} />
          <Route
            exact
            path="/global_analytics"
            component={Global}
          />
          <Route
            exact
            path="/prevention"
            component={Prevention }
          />
          <Route
            exact
            path="/what-is-covid"
            component={What}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
