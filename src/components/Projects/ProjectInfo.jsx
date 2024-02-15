import React from "react";
import ProjectsData from "../../data/projects.json";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import "./projects.css";
import { useNavigate } from "react-router-dom";

const ProjectInfo = () => {
  const { id } = useParams();
  const project = ProjectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <Header />
      <section className="project-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-text">{project.description}</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 project-img">
            <div id="project-img">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="links">
                <p>
                  <a
                    className="project-link"
                    href={project.github}
                    title="GitHub repository"
                  >
                    <i className="fa-solid fa-scroll project-icon"></i>
                  </a>
                </p>
                <p>
                  <a
                    className="project-link"
                    href={project.deployedApp}
                    title="Deployed application"
                  >
                    <i className="fa-solid fa-globe project-icon"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="goBack">
          <Button
            className="custom-button-back border-black"
            onClick={handleButtonClick}
            id="back-btn"
            type="button"
          >
            Go back
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProjectInfo;
