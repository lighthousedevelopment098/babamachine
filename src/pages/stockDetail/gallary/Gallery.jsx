import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const mainImages = [
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0274.jpg",
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0276.jpg",
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0236.jpg",
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0237.jpg",
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0238.jpg",
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0239.jpg",
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0240.jpg",
    "https://www.machinelines.com/wp-content/uploads/2024/11/100_0241.jpg",
  ];

  const handlePrev = () => {
    setMainIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : mainImages.length - 1));
  };

  const handleNext = () => {
    setMainIndex((prevIndex) => (prevIndex < mainImages.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="gallery">
      <div className="main-slide">
        <div className="arrow prev" onClick={handlePrev}>
          <FaArrowLeft />
        </div>
        <img src={mainImages[mainIndex]} alt={`Slide ${mainIndex}`} className="main-image" />
        <div className="arrow next" onClick={handleNext}>
          <FaArrowRight />
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumb-container">
          {mainImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail-image ${index === mainIndex ? 'active' : ''}`}
              onClick={() => setMainIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
