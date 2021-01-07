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
    </ul>
  );
};

export default navigationItems;
