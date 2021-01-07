import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Landing from "./containers/Landing/Landing";

function App() {
  let routes = (
    <Switch>
      {/* <Route path="/about" component={} />
      <Route path="/contact" component={BurgerBuilder} />
      <Route path="/portfolio" component={BurgerBuilder} /> */}
      <Route path="/portfolio" component={Landing} />
      <Route path="/" component={Landing} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
