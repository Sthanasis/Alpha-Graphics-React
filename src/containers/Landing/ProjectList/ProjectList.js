import React from "react";

import "./ProjectList.css";
import LandingProject from "../LandingProject/LandingProject";

const projectList = (props) => {
  return (
    <React.Fragment>
      {props.projects.length > 0 && (
        <h1 className="ListHeader">Latest Projects!</h1>
      )}
      {props.projects.map((project) => {
        let imgUrl = `${process.env.PUBLIC_URL}/img/${project.project}`;
        console.log(imgUrl);
        return (
          <div
            className="project"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
            key={project._id}
          >
            <LandingProject project={project.project} title={project.title} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default projectList;
