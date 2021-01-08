import React, { useEffect, useState } from "react";

import "./Landing.css";
import Logo from "../../components/Logo/Logo";
import ProjectList from "./ProjectList/ProjectList";
import ApiCalls from "../../utos/ApiCalls";

const Landing = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    ApiCalls.getProjects().then((res) => {
      const projectsToShow = res.data.projects
        .reverse()
        .filter((_, index) => index <= 2);
      setProjects(projectsToShow);
      console.log(projectsToShow);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="Background"></div>
      <Logo />
      <ProjectList projects={projects} />
    </React.Fragment>
  );
};

export default Landing;
