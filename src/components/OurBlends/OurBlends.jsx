import React, { useState } from "react";
import "./OurBlends.css";

// BLEND ANIMAL IMAGES
import Apex from "./BlendIconography/Apex.svg";
import Canopy from "./BlendIconography/Canopy.svg";
import Coastal from "./BlendIconography/Coastal.svg";
import Howler from "./BlendIconography/Howler.svg";
import Restful from "./BlendIconography/Restful.svg";
//

// BLEND COFFEE ICONS
import DarkRoast from "./RoastIconography/DarkRoast.svg";
import GroundCoffee from "./RoastIconography/GroundCoffee.svg";
import LightRoast from "./RoastIconography/LightRoast.svg";
import MediumRoast from "./RoastIconography/MediumRoast.svg";
import MultiOrigin from "./RoastIconography/MultiOrigin.svg";
import SingleOrigin from "./RoastIconography/SingleOrigin.svg";
import WholeBean from "./RoastIconography/WholeBean.svg";

function OurBlends() {
  const [activePanel, setActivePanel] = useState(null);

  const panels = [
    {
      id: 1,
      image: Apex,
      label: "Apex",
      blendName: "Apex Blend",
      blendType: "Cold Brew",
      roastType: "Dark Roast",
      beanType: "Whole Bean",
      region: "Multi Region",
      description:"Rich and complex, dark chocolate and dried fruit"
    },
    {
      id: 2,
      image: Canopy,
      label: "Canopy",
      blendName: "Canopy Roast",
      blendType: "Costa Rica",
      roastType: "Light Roast",
      beanType: "Whole Bean",
      region: "Single Origin",
      description:"Delicate citrus and floral notes with brown sugar sweetness"

    },
    {
      id: 3,
      image: Coastal,
      label: "Coastal",
      blendName: "Coastal Roast",
      blendType: "Papa New Guinea",
      roastType: "Medium Roast",
      beanType: "Whole Bean",
      region: "Single Origin",
      description:"Earthy and heavy bodied, dark fruit with notes of spice and tobacco"
      
    },
    {
      id: 4,
      image: Howler,
      label: "Howler",
      blendName: "Howler Blend",
      blendType: "Espresso",
      roastType: "Dark Roast",
      beanType: "Ground Coffee",
      region: "Multi Origin",
      description:"A balanced and approachable blend with orange, cocoa, and notes of red fruit"

    },
    {
      id: 5,
      image: Restful,
      label: "Restful",
      blendName: "Restful Blend",
      blendType: "Decaf",
      roastType: "Light Roast",
      beanType: "Whole Bean",
      region: "Multi Origin",
      description:"Brown sugar and candied nuts with a round and smooth body"
    },
  ];

  const handlePanelClick = (panelId) => {
    setActivePanel((prevActivePanel) =>
      prevActivePanel === panelId ? null : panelId
    );
  };

  return (
    <div className="rectangularSection" style={{ width: "100%" }}>
      <div className="accordionHeader">OUR BLENDS</div>
      <div className="accordionContainer">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`panel ${activePanel === panel.id ? "active" : ""}`}
            style={{ flex: activePanel === panel.id ? 5 : 1 }}
            onClick={() => handlePanelClick(panel.id)}
          >
            <img src={panel.image} alt={panel.label} />

            <div className="coffeeInfo">
              <div className="apexInfo">
               
                <img src={DarkRoast}></img>
              
                <img src={WholeBean}></img>
                
                <img src={MultiOrigin}></img>
                
              </div>
            </div>

            <div className="blendName">
              <p>{panel.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurBlends;
