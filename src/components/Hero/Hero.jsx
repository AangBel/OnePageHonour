import React from 'react';

import HomeHeroImage from "./Home_Hero_x2.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img id="heroImage" src={HomeHeroImage} alt="Hero Image of a Coffee Receptacle" />
    </div>
  );
};

export default Hero;
