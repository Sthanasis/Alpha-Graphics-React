import React, { useEffect, useState } from "react";

import "./Portfolio.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Button from "../../components/UI/Button/Button";
import apiCalls from "../../utos/ApiCalls";
import ProjectList from "./ProjectList/ProjectList";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("mode")) {
      setMode("GraphicDesign");
      sessionStorage.setItem("mode", "GraphicDesign");
    } else {
      setMode(sessionStorage.getItem("mode"));
    }

    if (mode === "ConceptArt") {
      apiCalls
        .getConceptArtProjects()
        .then((res) => res.data)
        .then((res) => {
          const displayProjects = [...res.data.projects].reverse();
          setProjects(displayProjects);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (mode === "GraphicDesign") {
      apiCalls
        .getGraphicDesignProjects()
        .then((res) => res.data)
        .then((res) => {
          const displayProjects = [...res.data.projects].reverse();
          setProjects(displayProjects);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [mode]);

  const setModeToConceptArtHandler = () => {
    setMode("ConceptArt");
    sessionStorage.setItem("mode", "ConceptArt");
  };

  const setModeToGraphicDesignHanlder = () => {
    setMode("GraphicDesign");
    sessionStorage.setItem("mode", "GraphicDesign");
  };

  return (
    <React.Fragment>
      <Backdrop backdrop />
      <div className="Buttons-Container">
        <Button
          click={setModeToGraphicDesignHanlder}
          selected={mode === "GraphicDesign"}
          btnType="Dark"
        >
          Graphic Design
        </Button>
        <Button
          click={setModeToConceptArtHandler}
          selected={mode === "ConceptArt"}
          btnType="Dark"
        >
          Concept Art
        </Button>
      </div>
      <ProjectList projects={projects} />
    </React.Fragment>
  );
};

export default Portfolio;
