import React from "react";

import "./Project.css";
import Outline from "../UI/Outline/Outline";

const project = (props) => {
  const getFormatedDate = (date) => {
    if (props) {
      let arr = props.date.split(" ");
      arr = arr.slice(0, 4);
      arr = arr.join(" ");
      return arr;
    }
  };
  return (
    <div className="ViewedProject">
      <Outline close={props.closeProject} />
      <div className="imgContainer center">
        <div className="titleContainer widthFitContent">
          <div className="title">{props.title}</div>
          <div className="projectDescription">{props.description}</div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/img/${props.project}`}
          alt={props.title}
        />
        <div className="date">{getFormatedDate(props.date)}</div>
      </div>
    </div>
  );
};

export default project;
