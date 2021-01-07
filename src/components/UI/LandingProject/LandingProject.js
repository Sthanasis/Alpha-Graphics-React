import React from "react";

import "./LandingProject.css";
import Button from "../Button/Button";

const landingProjectList = (props) => (
  <div className="LandingProject">
    <span>{props.title}</span>
    <Button btnType="Dark" click={() => console.log("clicked")}>
      View Project
    </Button>
    {props.IsAuth && <Button>Delete Project</Button>}
  </div>
);

export default landingProjectList;
