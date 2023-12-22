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
//

import Plus from "./Plus.svg";

function OurBlends() {
  const [activePanel, setActivePanel] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);

  const panels = [
    {
      id: 1,
      image: Apex,
      label: "Apex",
      blendName: "Apex Blend",
      blendType: "Cold Brew",
      roastType: "Dark Roast",
      roastIcon: DarkRoast,
      beanType: "Whole Bean",
      beanIcon: WholeBean,
      region: "Multi Region",
      regionIcon: MultiOrigin,
      description: "Rich and complex, dark chocolate and dried fruit",
    },
    {
      id: 2,
      image: Canopy,
      label: "Canopy",
      blendName: "Canopy Roast",
      blendType: "Costa Rica",
      roastType: "Light Roast",
      roastIcon: LightRoast,
      beanType: "Whole Bean",
      beanIcon: WholeBean,
      region: "Single Origin",
      regionIcon: SingleOrigin,
      description:
        "Delicate citrus and floral notes with brown sugar sweetness",
    },
    {
      id: 3,
      image: Coastal,
      label: "Coastal",
      blendName: "Coastal Roast",
      blendType: "Papa New Guinea",
      roastType: "Medium Roast",
      roastIcon: MediumRoast,
      beanType: "Whole Bean",
      beanIcon: WholeBean,
      region: "Single Origin",
      regionIcon: SingleOrigin,
      description:
        "Earthy and heavy bodied, dark fruit with notes of spice and tobacco",
    },
    {
      id: 4,
      image: Howler,
      label: "Howler",
      blendName: "Howler Blend",
      blendType: "Espresso",
      roastType: "Dark Roast",
      roastIcon: DarkRoast,
      beanType: "Ground Coffee",
      beanIcon: GroundCoffee,
      region: "Multi Origin",
      regionIcon: MultiOrigin,
      description:
        "A balanced and approachable blend with orange, cocoa, and notes of red fruit",
    },
    {
      id: 5,
      image: Restful,
      label: "Restful",
      blendName: "Restful Blend",
      blendType: "Decaf",
      roastType: "Light Roast",
      roastIcon: LightRoast,
      beanType: "Whole Bean",
      beanIcon: WholeBean,
      region: "Multi Origin",
      regionIcon: MultiOrigin,
      description: "Brown sugar and candied nuts with a round and smooth body",
    },
  ];

  const handlePanelClick = (panelId) => {
    setActivePanel((prevActivePanel) =>
      prevActivePanel === panelId ? null : panelId
    );

    setInfoVisible((prevInfoVisible) => {
      // ***************************
      const newInfoVisible = {};

      Object.keys(prevInfoVisible).forEach((id) => {
        newInfoVisible[id] = false;
      });

      newInfoVisible[panelId] = !prevInfoVisible[panelId];
      return newInfoVisible;
    });
  };

  return (
    <div className="rectangularSection" style={{ width: "100%" }} id="TheBlends">
      <div className="accordionHeader">Our Blends</div>
      <div className="accordionContainer">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`panel ${activePanel === panel.id ? "active" : ""}`}
            // style={{ flex: activePanel === panel.id ? 3 : 1 }}
            style={{ flex: 1 }}
            onClick={() => handlePanelClick(panel.id)}
          >
            <img src={panel.image} alt={panel.label} />
            <button
              onClick={handlePanelClick}
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img src={Plus} alt="PlusSign" className="plusSign" />
            </button>

            {infoVisible[panel.id] && (
              <>
                <button
                  onClick={handlePanelClick}
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  {/* WILL COME BACK TO WORKING ON TOGGLE FOR THE PLUS/X SIGN TO OPEN/CLOSE ACCORDION PANEL */}
                  {/* <img
                    src={Plus}
                    alt="PlusSign"
                    style={{ transform: "rotate(45deg)" }}
                  /> */}
                </button>

                <div className="coffeeInfoBox">
                  <div className="topCoffeeInfo">
                    <div className="blendTitle">{panel.blendName}</div>
                    <div className="blendTypeTitle">{panel.blendType}</div>
                  </div>
                  <div className="bottomCoffeeInfo">
                    <div className="quickInfo">
                      <img src={panel.roastIcon} className="quickInfoImg" />
                      {panel.roastType}

                      <img src={panel.beanIcon} className="quickInfoImg" />
                      {panel.beanType}

                      <img src={panel.regionIcon} className="quickInfoImg" />
                      {panel.region}
                    </div>

                    {panel.description}
                  </div>
                </div>
              </>
            )}

            <div className="blendAccordionName">
              <p>{panel.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurBlends;
