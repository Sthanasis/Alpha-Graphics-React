import React from "react";

import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar isAuth={props.isAuth} setAuth={props.setAuth} />
      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
