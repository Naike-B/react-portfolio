import React from "react";
import HomeLogo from "images/home-logo-3.png";
import "./footer-home.css";

function HomeFooter() {
  return (
    <>
      <footer className="home-footer">
        <img
          src={HomeLogo}
          alt="Bottom Left Image"
          className="bottom-left-image"
        />
      </footer>
    </>
  );
}

export default HomeFooter;
