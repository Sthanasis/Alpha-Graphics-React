import React from "react";

import "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Social from "../Social/Social";

const sideDrawer = (props) => {
  let status = "Closed";
  if (props.open) {
    status = "Open";
  }
  return (
    <React.Fragment>
      <div className={`SideDrawer ${status}`} onClick={props.closed}>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
        <Social />
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
