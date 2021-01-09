import React, { useEffect, useState } from "react";

import "./Landing.css";
import Logo from "../../components/Logo/Logo";
import ProjectList from "./ProjectList/ProjectList";
import ApiCalls from "../../utos/ApiCalls";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

const Landing = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    ApiCalls.getProjects().then((res) => {
      const projectsToShow = res.data.projects
        .reverse()
        .filter((_, index) => index <= 2);
      setProjects(projectsToShow);
    });
    return () => {
      setProjects([]);
    };
  }, []);

  return (
    <React.Fragment>
      <Backdrop backdrop={false} />
      <Logo />
      <ProjectList projects={projects} />
    </React.Fragment>
  );
};

export default Landing;
