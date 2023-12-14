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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rectangular-section" style={{ width: '100%' }}>
      <div className="accordion-header" onClick={handleToggle}>
        Click to toggle
      </div>
      {isOpen && (
        <div className="accordion-content">
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          <img src="image3.jpg" alt="Image 3" />
          <img src="image4.jpg" alt="Image 4" />
          <img src="image5.jpg" alt="Image 5" />
        </div>
      )}
    </div>
  );
};

export default OurBlends;
