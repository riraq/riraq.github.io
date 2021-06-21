import React from "react";
import Project from "../components/Project";
import collabProjects from "../collabProjects.json"
import soloProjects from "../soloProjects.json"

function Portfolio() {

  const collabProjectList = () => {
    return collabProjects.map(project => (
      <Project
        key={project.id}
        projectLink={project.projectLink}
        projectImage={project.projectImage}
        projectName={project.projectName}
        projectRepoLink={project.projectRepoLink}
      />
    ))
  }

  const soloProjectsList = () => {
    return soloProjects.map(project => (
      <Project
        key={project.id}
        projectLink={project.projectLink}
        projectImage={project.projectImage}
        projectName={project.projectName}
        projectRepoLink={project.projectRepoLink}
      />
    ))
  }

  return (
    <div>
      <h1 className="text-center">Portfolio</h1>

      <h3 className="text-center">Collaborative Projects</h3>
      <div className="row justify-content-center m-2">
        {collabProjectList()}
      </div >

      <h3 className="text-center">Solo Projects</h3>
      <div className="row justify-content-center m-2">
        {soloProjectsList()}
      </div >

    </div>
  );
}

export default Portfolio;
