import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./SocialIcons/facebook-f.svg";
import "./SocialIcons/x-twitter.svg";
import "./SocialIcons/youtube.svg";

import ArrowSvg from "./Arrow.svg";

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
              className="emailInputBox"
            />
            <img src={ArrowSvg} className="emailArrow"></img>
          </div>
        </div>
        {/* previously linksAndLogo div */}
        <div className="footerLinks">
          <div className="contactLinks">
            <h3 className="helpDeskLink">Help Desk</h3>
            <h3>Press</h3>
            <h3>Carry Us</h3>
          </div>
        </div>

        <div className="secondaryLogoDiv">
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
          {/* <FontAwesomeIcon icon={faTwitter} /> */}
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </>
  );
}

export default Footer;
