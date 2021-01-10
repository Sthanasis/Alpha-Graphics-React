import React from "react";

import "./Button.css";

const button = (props) => {
  let btnClass = "";
  let selectedClass = "";

  switch (props.btnType) {
    case "Dark":
      btnClass = "btn-dark";
      break;
    case "Medium":
      btnClass = "btn-medium";
      break;
    case "Download":
      btnClass = "btn-download";
      break;
    case "Danger":
      btnClass = "btn-danger";
      break;
    case "Success":
      btnClass = "btn-success";
      break;
    default:
      btnClass = "btn-default";
  }

  if (props.selected) {
    selectedClass = "selected";
  }
  return (
    <button
      className={`btn ${btnClass} ${selectedClass}`}
      onClick={props.click}
      disabled={props.disabled}
      data-icon={props.icon}
    >
      {props.children}
    </button>
  );
};

export default button;
