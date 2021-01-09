import React from "react";
import PortfolioProject from "../PortfolioProject/PortfolioProject";

import "./ProjectList.css";

const portfolioProjectList = (props) => {
  return (
    <div className="Portfolio-Project-List">
      {props.projects.map((project) => (
        <div className="Project-Container" key={project._id}>
          <PortfolioProject title={project.title} img={project.project} />
        </div>
      ))}
    </div>
  );
};

export default portfolioProjectList;
