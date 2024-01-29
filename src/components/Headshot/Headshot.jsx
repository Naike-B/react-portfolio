import React from "react";
import headshotImage from "../../assets/images/portrait-img.jpg";
import "./headshot.css";

const Headshot = () => {
  return (
    <div className="image-wrapper">
      <img src={headshotImage} className="headshot" alt="Photo Naike" />
    </div>
  );
};

export default Headshot;
