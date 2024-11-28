import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../images/right-arrow.png";

const HeroSection = ({ shapes, title, introText }) => {
  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <h1 className="home-title header-1">{title}</h1>
        <p className="intro-text">{introText}</p>
      </div>
      <div className="hero-section-link">
        <div className="hero-section-shapes">
          {shapes.map((shape, index) => (
            <img
              key={index}
              className={`shape${index + 1}`}
              src={shape}
              alt={`Dekorativ form ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-link-text">
          <Link className="header-2" to="#">
            Gå till tipsbanken
          </Link>
          <img src={arrowRight} alt="högerpil" className="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
