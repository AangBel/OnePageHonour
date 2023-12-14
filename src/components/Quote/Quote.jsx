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
          macaroon ice cream. Halvah cake liquorice marshmallow pastry cotton
          candy topping chupa chups bonbon. Pie dessert candy soufflé
          pie lollipop. Gummies cotton candy gummi bears candy canes     wafer
          bonbon. Gummi bears sweet caramels chupa chups liquorice wafer gummi
          bears. Sesame snaps donut macaroon macaroon bonbon jujubes jelly beans
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
