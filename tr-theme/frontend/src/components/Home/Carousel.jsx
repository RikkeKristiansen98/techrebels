import React from "react";
import TipSlide from "./TipSlide";


const Carousel = ({ tips, currentIndex, onPrev, onNext }) => {
  return (
    <div className="carousel-section">
      <h2 className="header-2">Tech Rebels tipsar</h2>
      <div className="carousel-section-wrapper">
        <button className="carousel-section-arrow carousel-section-arrow--left" onClick={onPrev}>
          ←
        </button>
        <div className="carousel-section-tips">
          {tips.map((tip, index) => (
            <TipSlide key={index} tip={tip} />
          ))}
        </div>
        <button className="carousel-section-arrow carousel-section-arrow--right" onClick={onNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
