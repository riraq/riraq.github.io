import React from "react";
import Project from "../components/Project";
import projects from "../projects.json"
function Portfolio() {

  const projectList = () => {
    return projects.map(project => (
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

      <div className="row justify-content-center m-2">
        {projectList()}
      </div >

    </div>
  );
}

export default Portfolio;
