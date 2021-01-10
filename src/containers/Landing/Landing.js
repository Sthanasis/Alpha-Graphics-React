import React from "react";

import "./Landing.css";
import Logo from "../../components/Logo/Logo";
import ProjectList from "./ProjectList/ProjectList";

import Backdrop from "../../components/UI/Backdrop/Backdrop";

const Landing = (props) => {
  return (
    <React.Fragment>
      <Backdrop backdrop={false} />
      <Logo />
      <ProjectList isAuth={props.isAuth} />
    </React.Fragment>
  );
};

export default Landing;
