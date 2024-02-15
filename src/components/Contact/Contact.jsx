import React from "react";
import Document from "document.pdf";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.css";

function Contact() {
  return (
    <section id="contact-container" className="d-flex justify-content-center">
      <div className="container-lg text-center">
        <h1 className="contact-title">Get in touch!</h1>
        <div className="contact-info-wrapper d-flex justify-content-center">
          <div className="contact-details">
            <p className="contact-link-container">
              <a href="mailto:nbi.study2@gmail.com">
                <i className="fa-solid fa-envelope" id="contact-icon"></i>
              </a>
              <a href="https://github.com/Naike-B" target="_blank">
                <i className="fa-brands fa-github" id="contact-icon"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fa-brands fa-linkedin" id="contact-icon"></i>
              </a>
            </p>
            <a href={Document} download="document.pdf">
              <Button
                className="custom-button-resume border-black"
                id="resume-btn"
                type="button"
              >
                Download CV
              </Button>
            </a>
          </div>
          <div className="contact-form">
            <Form
              action="https://getform.io/f/a24e89a6-1710-45fb-8c3a-1cd913c05ca9"
              method="POST"
            >
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control name="name" type="text" required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" type="email" required />
              </Form.Group>
              <Form.Group name="message" controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
              <Button className="border-black" id="submit-btn" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
