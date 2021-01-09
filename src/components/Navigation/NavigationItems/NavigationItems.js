import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" icon="logo"></NavigationItem>
      <NavigationItem link="/portfolio">Portfolio</NavigationItem>
      <NavigationItem link="/about">About</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
      {props.isAuth && (
        <NavigationItem link="/addproject">Add Project</NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
