import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Landing from "./containers/Landing/Landing";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import AddProject from "./containers/AddProject/AddProject";

const App = () => {
  let routes = (
    <Switch>
      {/* <Route path="/about" component={} />
      <Route path="/portfolio" component={BurgerBuilder} /> */}
      <Route path="/addproject" component={AddProject} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/" component={Landing} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
