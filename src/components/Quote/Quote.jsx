import React from "react";
import "./Quote.css";

function Quote() {
  return (
    <div className="quoteSection">
      <div className="quoteBox">
        <p className="quotePText">
        Cupcake ipsum dolor sit amet icing cookie cupcake. Sweet roll bear
          claw danish soufflé lemon drops toffee sweet pastry chocolate. Sesame
          snaps cotton candy topping tiramisu chupa chups candy canes apple pie
          muffin. Sweet roll tootsie roll wafer donut bonbon cake chocolate
          macaroon ice cream. Halvah cake liquorice marshmallow pastry. 
        </p>
        <p className="quoteEllipse"></p>
        <div className="ownerNameTitleBox">
          <p className="quoteAuthorText">JOHANNES STOLZ </p>
          <p className="quoteAuthorTitle">OWNER</p>
        </div>
      </div>
    </div>
  );
}

export default Quote;
