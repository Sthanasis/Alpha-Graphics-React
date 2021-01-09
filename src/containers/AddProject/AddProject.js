import React, { useState } from "react";

import "./AddProject.css";
import Input from "../../components/UI/Input/Input";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Button from "../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../utos/utility";
import apiCalls from "../../utos/ApiCalls";

const AddProject = () => {
  const createInitialState = () => {
    return {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Title",
        },
        label: "Project Title",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      project: {
        elementType: "input",
        elementConfig: {
          type: "file",
          accept: "image/*",
          name: "photo",
        },
        label: "Project image in jpeg",
        value: "",
      },
      graphicDesign: {
        elementType: "input",
        elementConfig: {
          type: "radio",
          name: "radio-input",
        },
        label: "Graphic Design",
        value: "Graphic Design",
      },
      conceptArt: {
        elementType: "input",
        elementConfig: {
          type: "radio",
          name: "radio-input",
        },
        label: "Concept Art",
        value: "Concept Art",
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Description",
        },
        label: "Project Description",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    };
  };
  const [data, setData] = useState({
    title: null,
    project: null,
    type: null,
    description: null,
  });

  const [controls, setControls] = useState(createInitialState());

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }

  const createFormData = (data) => {
    const postData = new FormData();
    postData.append("title", data.title);
    postData.append("description", data.description);
    postData.append("photo", data.project);
    postData.append("type", data.type);
    return postData;
  };

  const postDataHandler = () => {
    let validatedData = true;
    for (let key in data) {
      if (data[key] === null || data[key] === "" || data[key] === undefined) {
        validatedData = false;
      }
    }
    if (validatedData) {
      const postData = createFormData(data);
      apiCalls
        .insertProject(postData)
        .then((res) => {
          if (res.data.status === "success") {
            setControls(createInitialState());
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Complete every field in order to upload new project");
    }
  };

  const onInputChangeHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true,
      }),
    });

    const targetKey =
      controlName === "conceptArt" || controlName === "graphicDesign"
        ? "type"
        : controlName;

    const targetValue =
      controlName === "project" ? event.target.files[0] : event.target.value;

    const updatedData = updateObject(data, {
      [targetKey]: targetValue,
    });

    setData(updatedData);

    setControls(updatedControls);
  };

  let form = formElementsArray.map((formElement) => (
    <Input
      label={formElement.config.label}
      key={formElement.id}
      id={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => onInputChangeHandler(event, formElement.id)}
    />
  ));

  return (
    <React.Fragment>
      <Backdrop />
      <div className="form-container center">
        {form}
        <Button btnType="Dark" click={postDataHandler}>
          Submit
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AddProject;
