import React, { useState } from "react";

import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <React.Fragment>
      <Toolbar
        isAuth={props.isAuth}
        setAuth={props.setAuth}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuth}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
