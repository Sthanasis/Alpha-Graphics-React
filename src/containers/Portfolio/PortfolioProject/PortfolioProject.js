import React from "react";

import "./PortfolioProject.css";
import Button from "../../../components/UI/Button/Button";

const portfolioProject = (props) => {
  return (
    <div className="Project">
      <img
        src={`${process.env.PUBLIC_URL}/img/${props.img}`}
        alt={props.title}
      />
      <div className="details">
        <span>{props.title}</span>
        <Button btnType="Dark" click={props.showProject}>
          View Project
        </Button>
        {props.isAuth && (
          <Button btnType="Danger" click={props.deleteProject}>
            Delete Project
          </Button>
        )}
      </div>
    </div>
  );
};

export default portfolioProject;
