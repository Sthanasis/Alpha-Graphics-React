import React from "react";

import "./PortfolioProject.css";
import Button from "../../../components/UI/Button/Button";

const portfolioProject = (props) => (
  <div className="Project">
    <img src={`${process.env.PUBLIC_URL}/img/${props.img}`} alt={props.title} />
    <div className="details">
      <span>{props.title}</span>
      <Button btnType="Dark">View Project</Button>
    </div>
  </div>
);

export default portfolioProject;
