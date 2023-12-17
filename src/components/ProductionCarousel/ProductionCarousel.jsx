import React, { useState } from "react";
import Carousel from "nuka-carousel";
import "./ProductionCarousel.css"; 

import HandSelected from "./CarouselImagery/1 Hand selected.jpg";
import EthicallySourced from "./CarouselImagery/2 Ethically sourced.jpg";
import LocallyRoasted from "./CarouselImagery/3 Locally roasted.jpg";
import SmallBatched from "./CarouselImagery/4 Small batched.jpg";
import QualityAssured from "./CarouselImagery/5 Quality assured.jpg";
import Arrow from "./Arrow.svg";

function ProductionCarousel() {
  const carouselImages = [
    HandSelected,
    EthicallySourced,
    LocallyRoasted,
    SmallBatched,
    QualityAssured,
  ];

  const imageWidth = "100%";

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
    <div className="carouselContainer">
      <Carousel
        wrapAround={true}
        slidesToShow={3}
        cellSpacing={35}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className="carouselControl">
            <img
              src={Arrow}
              alt="Previous"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="carouselControl">
            <img src={Arrow} alt="Next" />
          </button>
        )}
        renderBottomCenterControls={null}
      >
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carouselImage"
            style={{ width: imageWidth }}
          />
        ))}
      </Carousel>

      {/* <button onClick={prevImage} className="arrows">
        <img
          src={Arrow}
          alt="Previous"
          style={{ transform: "rotate(180deg)" }}
        />
      </button> */}

      {/* <button onClick={nextImage} className="carousel-control">
        <img src={Arrow} alt="Next" />
      </button> */}


      <div className="sourcedTitleBox">
        <h3>Ethically Sourced</h3>
      </div>

      <div className="sourcedPText">
        <p>
          Donut sweet roll shortbread candy canes sugar plum biscuit. Halvah
          biscuit muffin dessert carrot cake marshmallow donut ice cream.
        </p>
      </div>
    </div>
  );
}

export default ProductionCarousel;
