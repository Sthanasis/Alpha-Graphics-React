import React, { useEffect, useState } from "react";

import "./Toolbar.css";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Social from "../Social/Social";

const Toolbar = (props) => {
  const [activeClass, setActiveClass] = useState("");
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

  return (
    <header className="Toolbar">
      <nav className={activeClass}>
        <NavigationItems isAuthenticated={props.isAuth} />
        <Social />
      </nav>
    </header>
  );
};

export default Toolbar;
