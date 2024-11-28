import React from "react";
import TipSlide from "./TipSlide";
import arrowRight from "../../images/right-arrow-black.png";
import arrowLeft from "../../images/left-arrow-black.png";

const Carousel = ({ tips, currentIndex, onPrev, onNext }) => {
  const visibleTips = tips.length > 4 ? [...tips, ...tips.slice(0, 4)] : tips;

  return (
    <div className="carousel-section">
      <h2 className="header-2">Tech Rebels tipsar</h2>
      <div className="carousel-section-wrapper">
        <button
          className="carousel-section-arrow carousel-section-arrow-left"
          onClick={onPrev}
        >
          <img src={arrowLeft} alt="vänsterpil" />
        </button>
        <div
          className="carousel-section-tips"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
          }}
        >
          {visibleTips.map((tip, index) => (
            <TipSlide key={index} tip={tip} />
          ))}
        </div>
        <button
          className="carousel-section-arrow carousel-section-arrow-right"
          onClick={onNext}
        >
          <img src={arrowRight} alt="högerpil" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
