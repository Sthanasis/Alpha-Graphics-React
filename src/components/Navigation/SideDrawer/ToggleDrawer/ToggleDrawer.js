import React from "react";

import "./ToggleDrawer.css";

const ToggleDrawer = (props) => (
  <div
    data-icon="burger-menu"
    className="DrawerToggle"
    onClick={props.clicked}
  ></div>
);

export default ToggleDrawer;
