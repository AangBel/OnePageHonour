import React from "react";
import "./Nav.css";

import HONOUR_PRIMARY_logo from "./HONOUR_PRIMARY_logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src={HONOUR_PRIMARY_logo}
          className="logoImage"
          alt="Honour Coffee Logo"
        />
      </div>
      <div className="navAnchors">
        <a href="#TheBlends" className="navAnchor1">
          THE BLENDS
        </a>

        <a href="#OurStory" className="navAnchor2">
          OUR STORY
        </a>
      </div>
      <div className="shopContainer">
        <p className="shopSymbol">SHOP</p>
      </div>
    </div>
  );
}

export default Nav;
