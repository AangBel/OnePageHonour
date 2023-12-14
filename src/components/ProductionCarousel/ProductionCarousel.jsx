import React, { useState } from 'react';
import './ProductionCarousel.css';

// IMAGES
import './CarouselImagery/1 Hand selected.jpg';
import './CarouselImagery/2 Ethically sourced.jpg';
import './CarouselImagery/3 Locally roasted.jpg';
import './CarouselImagery/4 Small batched.jpg';
import './CarouselImagery/5 Quality assured.jpg';
//

// Cambia esto a function 

const images = [
    './CarouselImagery/1 Hand selected.jpg',
    './CarouselImagery/2 Ethically sourced.jpg',
    './CarouselImagery/3 Locally roasted.jpg',
    './CarouselImagery/4 Small batched.jpg',
    './CarouselImagery/5 Quality assured.jpg'
]
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="arrows">
        <button onClick={prevImage}>&#8249;</button>
        <button onClick={nextImage}>&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;
