import React, { useState } from "react";
import "./OurBlends.css";

// BLEND IMAGES
import Apex from "./BlendIconography/Apex.svg";
import Canopy from "./BlendIconography/Canopy.svg";
import Coastal from "./BlendIconography/Coastal.svg";
import Howler from "./BlendIconography/Howler.svg";
import Restful from "./BlendIconography/Restful.svg";
//

function OurBlends() {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const handleToggle = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <div className="rectangularSection" style={{ width: "100%" }}>
      {/* REMOVING THE ON CLICK FROM THIS LINE BELOW - {handleToggle} */}
      <div className="accordionHeader">OUR BLENDS</div>
      {/* REMOVING IS OPEN FROM THIS LINE BELOW - isOpen && */}
      {
        <div className="accordionContainer">
          {/* <img src={Apex} alt="Apex Blend image" /> */}
          <div className="panel" style={{Apex}} alt="Apex Blend image">
            <p className="blendName">Apex</p>
          </div>
          {/* <img src={Canopy} alt="Canopy Blend image" /> */}
          <div className="panel" style={{Canopy}} alt="Canopy Blend image">
            <p className="blendName">Canopy</p>
          </div>
          {/* <img src={Coastal} alt="Coastal Blend image" /> */}
          <div className="panel" style={{Coastal}} alt="Coastal Blend image">
            <p className="blendName">Coastal</p>
          </div>

          {/* <img src={Howler} alt="Howler Blend image" /> */}
          <div className="panel" style={{Howler}} alt="Howler Blend image">
            <p className="blendName">Howler</p>
          </div>

          {/* <img src={Restful} alt="Restful Blend image" /> */}
          <div className="panel" style={{Restful}} alt="Restful Blend image">
          <p className="blendName">Restful</p>
          </div>
        </div>
      }
    </div>
  );
}

export default OurBlends;
