import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({
  hero_header,
  hero_description,
  hero_link_title,
  hero_link_url,
}) => {
  const heroImage = "http://techforalla.se/wp-content/uploads/2025/02/robot-1-e1739352899259.png";
  const heroHeader = "http://techforalla.se/wp-content/uploads/2025/02/techforalla-header-e1739365310603.png";
  const heroElement = "http://techforalla.se/wp-content/uploads/2025/02/elementt-e1739367544311.png";

  return (
    <div className="hero-section bg-pinkTheme relative py-20 px-6 sm:px-10 lg:py-[9%] lg:px-[10%] flex flex-col-reverse lg:flex-row min-h-[600px]">
      {/* Left container */}
      <div className="left flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        {/* Hero Header Image */}
        <img
          src={heroHeader}
          alt="Hero header"
          className="z-10 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] object-cover drop-shadow-lg mb-4 lg:mb-8"
        />
        {/* Hero Description */}
        <p className="text-blackTheme text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-0 leading-relaxed animate-slide-in-left">
          {hero_description}
        </p>
      </div>

      {/* Right container */}
      <div className="right flex-1 flex flex-col items-center justify-center mb-10 lg:mb-0">
        {/* Hero Image */}
        <div className="hero-section-image relative flex items-center justify-center w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="scale-75 sm:scale-90 lg:scale-100 object-cover drop-shadow-lg"
          />
        </div>
        {/* Button */}
        <div className="button-text mt-12 flex items-center justify-center">
          <Link
            className="bg-orange-500 border-blackTheme border-2 shadow-[4px_4px_3px_rgba(0,0,0,0.6)] rounded-lg px-4 py-2 flex items-center text-blackTheme text-sm sm:text-base lg:text-lg font-bold transition-transform duration-200 ease-in-out hover:scale-95 active:scale-90"
            to={hero_link_url}
          >
            {hero_link_title}
          </Link>
        </div>
      </div>

      {/* Decorative Element */}
      <img
        src={heroElement}
        loading="lazy"
        alt="Decorative element"
        className="absolute bottom-0 right-0 z-0 w-full h-auto"
      />
    </div>
  );
};

export default HeroSection;
