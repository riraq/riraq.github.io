import React from "react";
import Project from "../components/Project";
import projects from "../components/projects.json"
function Portfolio() {

  const projectList = () => {
    return projects.map(project => (
      <Project
        projectLink={project.projectLink}
        projectImage={project.projectImage}
        projectName={project.projectName}
        projectRepoLink={project.projectRepoLink}
      />
    ))

  }

  return (
    <div>
      <h1>Portfolio</h1>
      {projectList()}
    </div>
  );
}

export default Portfolio;
