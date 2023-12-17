import React, { useState, useRef, useEffect } from "react";
// import Flickity from "flickity";
// import Flickity from "react-flickity-component";

// // CSS
// import "./ProductionCarousel.css";
// import "flickity/css/flickity.css";

// IMAGES
import HandSelected from "./CarouselImagery/1 Hand selected.jpg";
import EthicallySourced from "./CarouselImagery/2 Ethically sourced.jpg";
import LocallyRoasted from "./CarouselImagery/3 Locally roasted.jpg";
import SmallBatched from "./CarouselImagery/4 Small batched.jpg";
import QualityAssured from "./CarouselImagery/5 Quality assured.jpg";
//

import Arrow from "./Arrow.svg";

function ProductionCarousel() {
  const carouselImages = [
    HandSelected,
    EthicallySourced,
    LocallyRoasted,
    SmallBatched,
    QualityAssured,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <>
      <div className="excellenceTextBox">
        <h2>Produced with excellence</h2>
      </div>

      <div className="carouselContainer">
        <div className="carousel">
          <img
            src={carouselImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>


      <div className="sourcedTitleBox">
        <h3>Ethically Sourced</h3>
        <div className={Arrow}>
          <button
            onClick={prevImage}
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <img
              src={Arrow}
              alt="Arrow"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button
            onClick={nextImage}
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <img src={Arrow} alt="Arrow" />
          </button>
        </div>
      </div>

      <div className="sourcedPText">
        <p>
          Donut sweet roll shortbread candy canes sugar plum biscuit. Halvah
          biscuit muffin dessert carrot cake marshmallow donut ice cream.
        </p>
      </div>
    </>
  );
}

export default ProductionCarousel;
