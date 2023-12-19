import React from "react";
import Arrow from "./Arrow.svg";

const CustomControls = ({
//   currentSlide,
//   slideCount,
  nextDisabled,
  previousDisabled,
  nextSlide,
  previousSlide,
//   goToSlide,
}) => {
  return (
    <div className="custom-controls">
      <button
        onClick={previousSlide}
        disabled={previousDisabled}
        className="arrow-button"
      >
        <img
          src={Arrow}
          alt="Previous"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
      <button
        onClick={nextSlide}
        disabled={nextDisabled}
        className="arrow-button"
      >
        <img src={Arrow} alt="Next" />
      </button>
    </div>
  );
};

export default CustomControls;
