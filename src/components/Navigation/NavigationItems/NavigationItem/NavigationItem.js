import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const navigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <NavLink
        exact
        to={props.link}
        data-icon={props.icon}
        activeClassName="active"
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
