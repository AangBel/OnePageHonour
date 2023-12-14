import React from "react";

import HomeHeroImage from "./Home_Hero_x2.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        id="heroImage"
        src={HomeHeroImage}
        alt="Hero Image of a Coffee Receptacle"
      />
      <div className="heroText">
        <h1 className="heroTitle">START YOUR DAY WITH HONOUR</h1>
      </div>
    </div>
  );
}

export default Hero;
