import React from "react";

import "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Social from "../Social/Social";
import Button from "../../UI/Button/Button";

const sideDrawer = (props) => {
  let status = "Closed";
  if (props.open) {
    status = "Open";
  }

  let button;

  if (props.isAuth) {
    button = (
      <div className="logoutMobileButton">
        <Button btnType="Danger" click={props.setAuth}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className={`SideDrawer ${status}`} onClick={props.closed}>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
        <Social />
        {button}
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
