import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Headshot from "../components/Headshot/Headshot";

function About() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container-fluid">
        <div className="row p-3">
          <div className="col-md-5 text-center mx-4 mb-4">
            <Headshot />
          </div>
          <div className="col-md-5 p-5 mx-3 text-center">
            <h1>About me</h1>
            <h4>
              Nearing the finish line of a Front-end web development bootcamp,
              I'm honing my skills in HTML, CSS, JavaScript, and React since
              last year. As a dedicated learner with a user-centric approach,
              I'm eager to contribute to meaningful web projects. When I'm not
              at the computer, I'm usually playing tennis, exploring the great
              outdoors, or enjoying the simple pleasures of life.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
