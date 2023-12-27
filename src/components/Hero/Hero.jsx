import React, { useState, useEffect } from "react";

import HomeHeroImage from "./Home_Hero_x2.jpg";
import "./Hero.css";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="heroImageContainer">
        <div className={`hero ${loaded ? "loaded" : ""}`}>
          <img
            id="heroImage"
            src={HomeHeroImage}
            alt="Hero image of a coffee bag and a cup full of coffee"
          />
          <div className="vapour">
            <span style={{ "--v": 1 }}></span>
            <span style={{ "--v": 2 }}></span>
            <span style={{ "--v": 3 }}></span>
            <span style={{ "--v": 4 }}></span>
            <span style={{ "--v": 5 }}></span>
          </div>
        </div>
      </div>
      <div className="heroContainer">
        <h1 className="heroText">START YOUR DAY WITH HONOUR</h1>
      </div>
    </>
  );
}

export default Hero;
