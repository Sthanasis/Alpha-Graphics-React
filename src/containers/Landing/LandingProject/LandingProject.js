import React from "react";

import "./LandingProject.css";
import Button from "../../../components/UI/Button/Button";

const landingProjectList = (props) => {
  return (
    <div className="LandingProject">
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
  );
};

export default landingProjectList;
