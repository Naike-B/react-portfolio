import React from "react";
import ProjectsData from "../../data/projects.json";
import { useParams } from "react-router-dom";

const ProjectInfo = () => {
  const { id } = useParams();
  const project = ProjectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <body className="project-body">
      <section id="project-section">
        <div className="container-lg text-center">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="card border-0 bg-transparent">
                <div className="card-body text-start text-white">
                  <h1
                    className="card-title text-start text-white"
                    id="project-title"
                  >
                    {project.title}
                  </h1>
                  <p className="card-text">
                    <p>{project.description}</p>
                    <p>
                      <a href={project.github}>Github Repository</a>
                    </p>
                    <p>
                      <a href={project.deployedApp}>Deployed Application</a>
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card border-0" id="project-img">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default ProjectInfo;
