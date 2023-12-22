import React, { useState } from "react";
import Carousel from "nuka-carousel";
import "./ProductionCarousel.css";
import CustomControls from "./CustomControls";

// IMAGES
import HandSelected from "./CarouselImagery/1 Hand selected.jpg";
import EthicallySourced from "./CarouselImagery/2 Ethically sourced.jpg";
import LocallyRoasted from "./CarouselImagery/3 Locally roasted.jpg";
import SmallBatched from "./CarouselImagery/4 Small batched.jpg";
import QualityAssured from "./CarouselImagery/5 Quality assured.jpg";
import Arrow from "./Arrow.svg";
//

function ProductionCarousel() {
  const carouselImages = [
    HandSelected,
    EthicallySourced,
    LocallyRoasted,
    SmallBatched,
    QualityAssured,
  ];

  // Kind of like how "zoomed the individual images are"
  //Might be worth looking into for the accordion
  const imageWidth = "100%";

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((nextSlide) => (nextSlide + 1) % carouselImages.length);
  // };

  // const prevIndex = () => {
  //   setCurrentIndex(
  //     (prevIndex) =>
  //       (prevIndex - 1 + carouselImages.length) % carouselImages.length
  //   );
  // };

  return (
    <div className="carouselContainer">
     <Carousel
        wrapAround={true}
        // slides to show 1.5 or 2.5
        slidesToShow={1.5}
        cellSpacing={20}
        centerMode={true}
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        sliderControlBottomCenter={null}
      
        renderBottomRightControls={(props) => (
          <CustomControls {...props} />
        )}
        renderBottomCenterControls={false}
        // renderCenterBottomControls={(props) => null}
      
      >
      
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carouselImage"
            style={{ width: imageWidth }}
            adaptiveHeight={true}
          />
        ))}
      </Carousel>

      {/* THESE  ARE AROUND WHERE THE ARROWS SHOULD BE ARE CURRENTLY NON FUNCTIONAL */}
      {/* <div className="arrowContainer">
        <button onClick={prevImage} className="arrowLeft">
          <img
            src={Arrow}
            alt="Previous"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>

        <button onClick={nextImage} className="arrowRight">
          <img src={Arrow} alt="Next" />
        </button>
      </div> */}

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
