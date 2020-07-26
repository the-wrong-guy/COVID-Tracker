import React from "react";
import Prevention from "./Main Components/Prevention/prevention";
import What from "./Main Components/What is COVID/what";
import Home from "./Main Components/Home/App";
import Global from "./Main Components/Global Analytics/app";
import Error from "./Main Components/Error 404/error";
import {Switch, Route,Router} from "react-router-dom";
// import BackToTop from './menu'
import history from './history';

 function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact from="/" component={Home} />
          <Route
            exact
            path="/global-statistics"
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
          <Route
            component={Error}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App