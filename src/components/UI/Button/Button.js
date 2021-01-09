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
    case "DownLoad":
      btnClass = "btn-download";
      break;
    case "Danger":
      btnClass = "btn-danger";
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
    >
      {props.children}
    </button>
  );
};

export default button;
