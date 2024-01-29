import React from "react";
import "./background.css";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="welcome-container">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100"
        rel="stylesheet"
      />
      <p id="head1" className="header">
        Hello
      </p>
      <p id="head2" className="header">
        I'm Naike
      </p>
      <p id="head3" className="header">
        a Web Developer
      </p>
      <p id="head4" className="header">
        in the making...
      </p>
      <p id="head5" className="header">
        Browse my Portfolio
      </p>
      <Link
        to="/about"
        end
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <button className="continue-btn">Continue</button>
      </Link>
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </div>
  );
}

export default Home;
