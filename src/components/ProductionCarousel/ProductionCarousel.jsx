import React, { useState } from "react";
import "./ProductionCarousel.css";

// IMAGES
import HandSelected from "./CarouselImagery/1 Hand selected.jpg";
import EthicallySourced from "./CarouselImagery/2 Ethically sourced.jpg";
import LocallyRoasted from "./CarouselImagery/3 Locally roasted.jpg";
import SmallBatched from "./CarouselImagery/4 Small batched.jpg";
import QualityAssured from "./CarouselImagery/5 Quality assured.jpg";
// 

import Arrow from "./Arrow.svg";

function ProductionCarousel() {
  const images = [HandSelected, EthicallySourced, LocallyRoasted, SmallBatched, QualityAssured];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="excellenceTextBox">
        <h2>Produced with excellence</h2>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <div className={Arrow}>
          <img src={Arrow} style={{ transform: 'rotate(180deg)' }} alt="Arrow" onClick={prevImage}/>
          <img src={Arrow} onClick={nextImage}></img>
        </div>
      </div>
      <div className="sourcedTitleBox">
        <h3>Ethically Sourced</h3>
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
