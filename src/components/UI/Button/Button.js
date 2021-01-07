import React from "react";

import "./Button.css";

const button = (props) => {
  let btnClass = "";

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

  return (
    <button
      className={`btn ${btnClass}`}
      onClick={props.click}
      selected={props.selected}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
