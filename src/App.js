import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Landing from "./containers/Landing/Landing";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import AddProject from "./containers/AddProject/AddProject";
import Auth from "./containers/Auth/Auth";
import { checkIsLoggedIn } from "./utos/utility";
import apiCalls from "./utos/ApiCalls";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  const loginHandler = (data) => {
    if (data.username.trim() === "" || data.password.trim() === "") {
      alert("Type in both username and password");
      return;
    }
    apiCalls.login(data).then((res) => {
      if (res.data.status === "success") {
        setIsLoggedIn(checkIsLoggedIn());
      }
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(checkIsLoggedIn());
  };

  let routes = (
    <Switch>
      {/* <Route path="/about" component={} />
       */}
      <Route
        path="/login"
        component={(props) => <Auth {...props} setAuth={loginHandler}></Auth>}
      />
      {isLoggedIn && <Route path="/addproject" component={AddProject} />}
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/" component={Landing} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Layout isAuth={isLoggedIn} setAuth={logoutUser}>
        {routes}
      </Layout>
    </div>
  );
};

export default App;
