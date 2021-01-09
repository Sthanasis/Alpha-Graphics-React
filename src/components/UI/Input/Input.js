import React from "react";

import "./Input.css";

const Input = (props) => {
  let inputElement = null;
  let inputClasses = "InputElement";

  let containerClass = "Input";

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses = "InputElement Invalid";
  }

  if (props.elementConfig.type === "radio") {
    inputClasses = "RadioElement";
    containerClass = "RadioInputContainer";
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  console.log(props.id);
  return (
    <div className={containerClass}>
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
