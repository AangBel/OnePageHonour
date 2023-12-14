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
        <div className="accordionContent">
          <p className="blendName">Apex</p>
          <img src={Apex} alt="Apex Blend image" />
          <p className="blendName">Canopy</p>
          <img src={Canopy} alt="Canopy Blend image" />
          <p className="blendName">Coastal</p>
          <img src={Coastal} alt="Coastal Blend image" />
          <p className="blendName">Howler</p>
          <img src={Howler} alt="Howler Blend image" />
          <p className="blendName">Restful</p>
          <img src={Restful} alt="Restful Blend image" />
        </div>
      }
    </div>
  );
}

export default OurBlends;
