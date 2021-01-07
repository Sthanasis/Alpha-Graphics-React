import React from "react";

import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
