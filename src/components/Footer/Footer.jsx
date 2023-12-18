import React from "react";

// import {icon} from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import { solid, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import "./SocialIcons/facebook-f.svg";
import "./SocialIcons/x-twitter.svg";
import "./SocialIcons/youtube.svg";

// import "./Arrow.svg";

import "./Footer.css";

import SecondaryLogo from "./SecondaryLogo.svg";

function Footer() {
  console.log("stuff");
  return (
    <>

    <div className="footerTopHalf">

      <div className="footerLeftTextAndEmail">
        <div className="footerHonourText">
          <h3>START YOUR DAY WITH HONOUR</h3>
        </div>

        <div className="footerEmailInput">
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            pattern=".+@example\.com"
            size="30"
            // placeholder="Email Address"
            className="emailInputBox"
          />
          {/* <img src="./Arrow.svg"></img> */}
        </div>
      </div>

      <div className="linksAndLogo">
        <div className="contactLinks">
          <h3>Help Desk</h3>
          <h3>Press</h3>
          <h3>Carry Us</h3>
        </div>
        <img src={SecondaryLogo}></img>
      </div>

    </div>

      <div className="bottomLineFooterContent">
        <div className="legaleseFooter">
          <p className="copyrightText">©2023 HONOUR COFFEE</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>

        <div className="socialLinks">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </>
  );
}

export default Footer;
