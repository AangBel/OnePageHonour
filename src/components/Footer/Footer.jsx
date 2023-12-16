import React from "react";

import "./Footer.css";

function Footer() {
  console.log("stuff");
  return (
    <>
      <div className="footerHonourText">
        <h3>START YOUR DAY WITH HONOUR</h3>
      </div>
      <div className="footerEmailInput">
        <label for="email">Email address</label>

        <input type="email" id="email" pattern=".+@example\.com" size="30" placeholder="Email Address" />
      </div>
      <div className="legaleseFooter">
        <p>©2023 HONOUR COFFEE</p>
        <br></br>
        <p>PRIVACY POLICY</p>
        <br></br>

        <p>TERMS & CONDITIONS</p>
        <br></br>

      </div>
    </>
  );
}

export default Footer;
