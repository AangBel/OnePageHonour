import React, { useState } from 'react';
import './OurBlends.css';

// BLEND IMAGES
import Apex from './BlendIconography/Apex.svg';
import Canopy from './BlendIconography/Canopy.svg';
import Coastal from './BlendIconography/Coastal.svg';
import Howler from './BlendIconography/Howler.svg';
import Restful from './BlendIconography/Restful.svg';
//


function OurBlends(){
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className="rectangularSection" style={{ width: '100%' }}>
        {/* REMOVING THE ON CLICK FROM THIS LINE BELOW - {handleToggle} */}
      <div className="accordionHeader">
        OUR BLENDS
      </div>
      {/* REMOVING IS OPEN FROM THIS LINE BELOW - isOpen && */}
      { (
        <div className="accordionContent">
          <img src={Apex} alt="Apex Blend image" />
          <img src={Canopy} alt="Canopy Blend image" />
          <img src={Coastal} alt="Coastal Blend image" />
          <img src={Howler} alt="Howler Blend image" />
          <img src={Restful} alt="Restful Blend image" />
        </div>
      )}
    </div>
  );
};

export default OurBlends;

