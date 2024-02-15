import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "../../data/projects.json";
import Header from "../../components/Header/Header";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "./gallery.css";

function ProjectsGallery() {
  return (
    <>
      <Header />
      <section>
        <Container className="gallery-container">
          <h1 className="gallery-title text-center">Projects</h1>
          <Row>
            {ProjectsData.map((project) => (
              <Col sm={12} md={6} lg={4} className="mb-4" key={project.id}>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-decoration-none"
                >
                  <Card className="project-card border-0">
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                      <Card.Title className="project-card-title">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="project-card-text">
                        {project.technologies}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProjectsGallery;
