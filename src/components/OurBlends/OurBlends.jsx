import React, {useState} from "react";
import "./OurBlends.css";

// BLEND IMAGES
import Apex from "./BlendIconography/Apex.svg";
import Canopy from "./BlendIconography/Canopy.svg";
import Coastal from "./BlendIconography/Coastal.svg";
import Howler from "./BlendIconography/Howler.svg";
import Restful from "./BlendIconography/Restful.svg";
//

function OurBlends() {
  const [activePanel, setActivePanel] = useState(null);

  const panels = [
    { id: 1, image: Apex, label: 'Apex' },
    { id: 2, image: Canopy, label: 'Canopy' },
    { id: 3, image: Coastal, label: 'Coastal' },
    { id: 4, image: Howler, label: 'Howler' },
    { id: 5, image: Restful, label: 'Restful' },
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
            className={`panel ${activePanel === panel.id ? 'active' : ''}`}
            style={{ flex: activePanel === panel.id ? 5 : 1 }}
            onClick={() => handlePanelClick(panel.id)}
          >
            <img src={panel.image} alt={panel.label} />
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
