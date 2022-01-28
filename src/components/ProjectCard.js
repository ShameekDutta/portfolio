import React from "react";

function ProjectCard(props) {
  const { url, title, excerpt} = props.project;
  return (
    <div className="card shadow h-100">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{excerpt}</p>
        <a href={url} >Go to Project</a>
      </div>
    </div>
  );
}
export default ProjectCard;
