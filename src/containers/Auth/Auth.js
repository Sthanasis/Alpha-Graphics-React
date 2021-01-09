import React, { useState } from "react";

import "./Auth.css";
import { updateObject } from "../../utos/utility";

const Auth = (props) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const loginInputHandler = (event) => {
    let userData = {};
    if (event.target.type === "text") {
      userData = updateObject(loginData, {
        username: event.target.value,
      });
    } else if (event.target.type === "password") {
      userData = updateObject(loginData, {
        password: event.target.value,
      });
    }
    setLoginData(userData);
  };

  return (
    <div className="Login">
      <input
        type="text"
        placeholder="username"
        value={loginData.username}
        onChange={(event) => loginInputHandler(event)}
      />
      <input
        type="password"
        placeholder="password"
        value={loginData.password}
        onChange={(event) => loginInputHandler(event)}
      />
      <button onClick={() => props.setAuth(loginData)}>Login</button>
    </div>
  );
};

export default Auth;
