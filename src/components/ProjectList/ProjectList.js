import React from "react";

import "./ProjectList.css";
import LandingProject from "../UI/LandingProject/LandingProject";

const projectList = (props) => {
  return (
    <React.Fragment>
      {props.projects.length > 0 && (
        <h1 className="ListHeader">Latest Projects!</h1>
      )}
      {props.projects.map((project) => (
        <div
          className="project"
          //   style={{
          //     backgroundImage: "url('../../assets/img/project-Spiderman3.jpeg')",
          //   }}
          key={project._id}
        >
          <LandingProject project={project.project} title={project.title} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default projectList;
