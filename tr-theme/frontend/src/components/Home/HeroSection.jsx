import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({
  hero_header,
  hero_description,
  hero_link_title,
  hero_link_url,
}) => {
  const heroImage = "http://techforalla.se/wp-content/uploads/2025/02/robot-1-e1739352899259.png";
  const heroHeader = "http://techforalla.se/wp-content/uploads/2025/02/techforallaheader-e1739352811594.png";

  return (
    <div className="hero-section bg-pinkTheme relative py-[6%] px-[10%] flex flex-row min-h-[600px] overflow-visible">
      {/* Left container */}
      <div className="left flex-1 flex flex-col items-start justify-center ">
        <img
          src={heroHeader}
          alt="Image of browser"
          className="z-10 scale-[0.8] object-cover"
        />
        {/* Hero text */}
        <div className="hero-section-text flex flex-col items-center">
          {/* <h1 className="hero-title text-white font-bold animate-slide-in-left 
                 xxs:text-2xl xs:text-2xl sm:text-4xl md:text-3xl">
            {hero_header}
          </h1> */}
          <p className="text-center intro-text text-blackTheme animate-slide-in-left px-[5%]
                md:text-xl
                xxs:text-sm xs:text-base sm:text-lg
                xxs:mt-[5%] xs:mt-[10%] sm:mt-[5%]">
            {hero_description}
          </p>
        </div>
      </div>

      {/* Right container */}
      <div className="right flex-1 flex flex-col items-center justify-center">
        <div className="hero-section-image relative flex items-center justify-center overflow-visible">
          <img
            src={heroImage}
            alt="Image of browser"
            className="scale-[0.7] object-cover"
          />
        </div>
        {/* Hero link */}
        <div className="hero-link-text flex items-center justify-center text-center z-20 group">
          <Link
            className="bg-orange-500 border-blackTheme border-2 shadow-[4px_4px_3px_rgba(0,0,0,0.6)] rounded-lg px-4 py-2 flex items-center text-blackTheme text-xl font-bold transition-transform duration-200 ease-in-out hover:scale-95 active:scale-90"
            to={hero_link_url}
          >
            {hero_link_title}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
