import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Headshot from "../components/Headshot/Headshot";

function About() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row p-3">
          <div className="col-md-5 text-center mx-4 mb-4">
            <Headshot />
          </div>
          <div className="col-md-5 p-5 mx-3 text-center">
            <h1>About me</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
