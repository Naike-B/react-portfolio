import React from "react";
import ProjectsGallery from "../components/Projects/ProjectsGallery";
import Header from "../components/Header/Header";
import ProjectsData from "../data/projects.json";

function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsGallery projects={ProjectsData} />
    </>
  );
}

export default ProjectsPage;
