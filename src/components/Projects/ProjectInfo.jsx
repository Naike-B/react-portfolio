import React from "react";
import ProjectsData from "../../data/projects.json";
import { useParams } from "react-router-dom";
import "./projects.css";

const ProjectInfo = () => {
  const { id } = useParams();
  const project = ProjectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-container">
      <div className="container-lg text-center">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="card border-0 bg-transparent">
              <div className="card-body text-start">
                <h1 className="project-title text-start">{project.title}</h1>
                <p className="project-text">{project.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card border-0" id="project-img">
              <img src={project.image} alt={project.title} />
              <div className="links">
                <p>
                  <a className="project-link" href={project.github}>
                    <i class="fa-solid fa-scroll project-icon"></i>
                  </a>
                </p>
                <p>
                  <a className="project-link" href={project.deployedApp}>
                    <i class="fa-solid fa-globe project-icon"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
