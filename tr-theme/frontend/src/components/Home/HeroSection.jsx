import React from "react";
import { Link } from "react-router-dom";


const HeroSection = ({ shapes, title, introText }) => {

  const arrowRight = [
    "https://techforalla.se/images/right-arrow-white.png"
  ]
  return (
    <div className="hero-section py-20 relative flex flex-col md:flex-row items-center md:items-start min-h-[250px] mb-10 px-[5%]">
      <div className="hero-section-text flex-1 text-center md:text-left">
        <h1 className="home-title text-5xl font-bold mb-5">{title}</h1>
        <p className="intro-text text-lg text-gray-800">{introText}</p>
      </div>
      <div className="hero-section-link flex-1 relative">
        <div className="hero-section-shapes relative">
          {shapes.map((shape, index) => (
            <img
              key={index}
              className={`absolute ${index === 0 ? "top-5 left-10 opacity-90 scale-x-[-1]" : "top-2 right-2 opacity-90 scale-x-[-1]"}`}
              src={shape}
              alt={`Dekorativ form ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-link-text absolute right-[120px] top-[220px] flex items-center space-x-2 text-white text-2xl transition-transform duration-300 hover:translate-x-2">
          <Link className="header-2" to="#">
            Gå till tipsbanken
          </Link>
          <img src={arrowRight} alt="högerpil" className="w-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
