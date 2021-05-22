import React from "react";

function Project(props) {
  return (
    <div class="col">
    <a href={props.projectLink} target="blank">
      <img src={props.projectImage} class="img-fluid border" alt={props.projectName} />
    </a>
    <p><a href={props.projectLink} target="blank">{props.projectName}</a></p>
    <p><a href={props.projectRepoLink} target="blank">GitHub Repository</a></p>
  </div>

)
}

export default Project;