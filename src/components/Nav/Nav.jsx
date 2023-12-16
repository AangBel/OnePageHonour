import React from "react";
// import { Link } from "react-router-dom";
// import LogOutButton from "../LogOutButton/LogOutButton";
// import "./Nav.css";
// import { useSelector } from "react-redux";

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
{
  /* <Link to="/About">
        <h2 className="nav-title">Honour</h2>
      </Link> */
}
/* It doesnt look like we will need Link for example because its just one page... */

{
  /* <Link className="navLink" to="/TheBlends">
           The Blends
          </Link>

          <Link className="navLink" to="/OurStory">
            Our Story
          </Link> */
}

{
  /* <Link className="navLink" to="/Contact">
            Contact
          </Link> */
}
