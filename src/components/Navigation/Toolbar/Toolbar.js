import React, { useEffect, useState } from "react";

import "./Toolbar.css";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleDrawer from "../SideDrawer/ToggleDrawer/ToggleDrawer";
import Social from "../Social/Social";
import Button from "../../UI/Button/Button";

const Toolbar = (props) => {
  const [activeClass, setActiveClass] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const addScrollClass = () => {
    if (window.scrollY !== 0) {
      setActiveClass("Colored");
    } else {
      setActiveClass("Transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addScrollClass);
    return () => {
      window.removeEventListener("scroll", addScrollClass);
    };
  }, []);

  useEffect(() => {
    console.log("yo");
    if (props.isAuth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [props.isAuth]);

  let button = null;
  if (isAuth) {
    button = (
      <div>
        <Button btnType="Danger" click={props.setAuth}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <header className="Toolbar">
      <nav className={activeClass}>
        <ToggleDrawer clicked={props.drawerToggleClicked} />
        <NavigationItems isAuth={isAuth} />
        <Social />
        {button}
      </nav>
    </header>
  );
};

export default Toolbar;
