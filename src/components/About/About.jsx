import React from "react";
import headshotImage from "/src/assets/images/portrait-img.jpg";
import "./about.css";

function About() {
  return (
    <section id="about-container">
      <div className="container-lg text-center">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="card border-0 bg-transparent">
              <div className="card-body text-start text-white">
                <h1 className="text-start text-white" id="about-title">
                  About Me
                </h1>
                <p className="about-card-text">
                  Nearing the finish line of a Front-end web development
                  bootcamp, I'm honing my skills in HTML, CSS, JavaScript, and
                  React since last year. As a dedicated learner with a
                  user-centric approach, I'm eager to contribute to meaningful
                  web projects. When I'm not at the computer, I'm usually
                  playing tennis, exploring the great outdoors, or enjoying the
                  simple pleasures of life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card border-0" id="about-img">
              <img src={headshotImage} className="headshot" alt="Photo Naike" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
