import React, { useState, useEffect } from "react";

import "./ProjectList.css";
import LandingProject from "../LandingProject/LandingProject";
import apiCalls from "../../../utos/ApiCalls";
import Project from "../../../components/Project/Project";

const ProjectList = (props) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();

  useEffect(() => {
    apiCalls.getProjects().then((res) => {
      const projectsToShow = res.data.projects.reverse();
      setProjects(projectsToShow);
    });
    return () => {
      setProjects([]);
    };
  }, []);

  useEffect(() => {
    if (project) {
      return () => {
        setProject();
      };
    }
  }, [project]);

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

  let projectsToRender = projects
    .filter((_, index) => index <= 2)
    .map((project, index) => {
      let imgUrl = `${process.env.PUBLIC_URL}/img/${project.project}`;
      let style = {
        backgroundImage: `url(${imgUrl})`,
      };
      if (index === 1) {
        style.backgroundPositionX = "55vw";
      }

      return (
        <div className="project" style={style} key={project._id}>
          <LandingProject
            isAuth={props.isAuth}
            project={project.project}
            title={project.title}
            showProject={() => getProjectFromDBHandler(project._id)}
            deleteProject={() => deleteProjectHandler(project._id)}
          />
        </div>
      );
    });

  return (
    <React.Fragment>
      {projectsToRender.length > 0 && (
        <h1 className="ListHeader">Latest Projects!</h1>
      )}
      {projectsToRender}
      {project && <Project {...project} closeProject={closeProjectHandler} />}
    </React.Fragment>
  );
};

export default ProjectList;
