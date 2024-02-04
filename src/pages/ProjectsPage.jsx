import React from "react";
import ProjectsGallery from "../components/Projects/ProjectsGallery";
import ProjectsData from "../data/projects.json";

function ProjectsPage() {
  return (
    <div>
      <ProjectsGallery projects={ProjectsData} />
    </div>
  );
}

export default ProjectsPage;
