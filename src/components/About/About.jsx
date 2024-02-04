import React from "react";
import headshotImage from "/src/assets/images/portrait-img.jpg";
import Document from "/src/assets/document.pdf";
import "./about.css";

function About() {
  return (
    <body className="about-body">
      <section id="about">
        <div className="container-lg text-center">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="card border-0 bg-transparent">
                <div className="card-body text-start text-white">
                  <h1
                    className="card-title text-start text-white"
                    id="about-title"
                  >
                    About Me
                  </h1>
                  <p className="card-text">
                    Nearing the finish line of a Front-end web development
                    bootcamp, I'm honing my skills in HTML, CSS, JavaScript, and
                    React since last year. As a dedicated learner with a
                    user-centric approach, I'm eager to contribute to meaningful
                    web projects. When I'm not at the computer, I'm usually
                    playing tennis, exploring the great outdoors, or enjoying
                    the simple pleasures of life.
                  </p>
                  <a href="mailto:nbi.study2@gmail.com">
                    <i className="fa-solid fa-envelope" id="about-icon"></i>
                  </a>
                  <a href="https://github.com/Naike-B" target="_blank">
                    <i className="fa-brands fa-github" id="about-icon"></i>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin" id="about-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card border-0" id="about-img">
                <img
                  src={headshotImage}
                  className="headshot"
                  alt="Photo Naike"
                />
              </div>
              <a href={Document} download="document.pdf">
                <button
                  type="button"
                  className="btn custom-button-resume col-md-3 col-sm-12"
                  id="resume-btn"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default About;
