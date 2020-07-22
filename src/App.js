import React from "react";
// import Prevention from "./components/prevention/prevention";
// import What from "./components/what_is_covid/about";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}
