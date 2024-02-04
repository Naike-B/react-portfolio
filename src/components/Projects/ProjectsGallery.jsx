import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "../../data/projects.json";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "./gallery.css";

function ProjectsGallery() {
  return (
    <Container>
      <Row>
        {ProjectsData.map((project) => (
          <Col sm={12} md={6} lg={4} className="mb-4" key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.technologies}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsGallery;
