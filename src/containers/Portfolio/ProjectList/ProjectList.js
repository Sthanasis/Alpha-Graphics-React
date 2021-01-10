import React, { useState, useEffect } from "react";

import PortfolioProject from "../PortfolioProject/PortfolioProject";
import Project from "../../../components/Project/Project";
import "./ProjectList.css";
import apiCalls from "../../../utos/ApiCalls";
import Loader from "../../../components/UI/Loader/Loader";

const PortfolioProjectList = (props) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();

  useEffect(() => {
    if (props.mode === "ConceptArt") {
      apiCalls
        .getConceptArtProjects()
        .then((res) => res.data)
        .then((res) => {
          const displayProjects = [...res.data.projects].reverse();
          setProjects(displayProjects);
          props.stopLoading();
        })
        .catch((err) => {
          console.log(err);
          props.stopLoading();
        });
    } else if (props.mode === "GraphicDesign") {
      apiCalls
        .getGraphicDesignProjects()
        .then((res) => res.data)
        .then((res) => {
          const displayProjects = [...res.data.projects].reverse();
          setProjects(displayProjects);
          props.stopLoading();
        })
        .catch((err) => {
          console.log(err);
          props.stopLoading();
        });
    }
  }, [props]);

  const getProjectFromDBHandler = async (id) => {
    try {
      const response = await apiCalls.getProject(id);
      if (response.data.status === "success") {
        document.querySelector("body").classList.add("locked");
        setProject({ ...response.data.data.project });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const closeProjectHandler = () => {
    setProject();
    document.querySelector("body").classList.remove("locked");
  };

  const deleteProjectHandler = (id) => {
    apiCalls
      .deleteProject(id)
      .then((res) => {
        const updatedProjects = [...projects].filter(
          (project) => project._id !== id
        );
        setProjects(updatedProjects);
        alert("Project Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const projectsToShow = props.loading ? (
    <Loader />
  ) : (
    projects.map((project) => (
      <div className="Project-Container" key={project._id}>
        <PortfolioProject
          isAuth={props.isAuth}
          title={project.title}
          img={project.project}
          showProject={() => getProjectFromDBHandler(project._id)}
          deleteProject={() => deleteProjectHandler(project._id)}
        />
      </div>
    ))
  );

  return (
    <React.Fragment>
      <div className="Portfolio-Project-List">{projectsToShow}</div>
      {project && <Project {...project} closeProject={closeProjectHandler} />}
    </React.Fragment>
  );
};

export default PortfolioProjectList;
