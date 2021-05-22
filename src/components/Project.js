import React from "react";

function Project(props) {
  return (
    <div className="col-sm-3 p-2 m-2">
      <div className="col">
        <a href={props.projectLink} target="blank">
          <img src={props.projectImage} className="img-fluid border" alt={props.projectName} />
        </a>
      </div>
      <div className="col text-center">
        <a href={props.projectLink} target="blank">{props.projectName}</a><br/>
        <a href={props.projectRepoLink} target="blank">GitHub Repository</a>
      </div>
    </div>

  )
}

export default Project;