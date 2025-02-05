import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({
  hero_header,
  hero_description,
  hero_link_title,
  hero_link_url,
}) => {
  const heroImage = "https://techforalla.se/images/hero-image.png";

  return (
    <div className="hero-section relative py-[3%] flex flex-col md:flex-row items-stretch min-h-[250px] overflow-visible">
      {/* wave element */}
      <div>
        <svg
          width="100%"
          height="100%"
          id="svg-wave"
          viewBox="0 0 1440 690"
          className="absolute top-0 left-0 w-full h-full scale-[1.5] object-cover z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,700 L 0,262 C 71.35885167464113,203.96172248803828 142.71770334928226,145.92344497607655 248,153 C 353.28229665071774,160.07655502392345 492.48803827751203,232.26794258373207 609,306 C 725.511961722488,379.73205741626793 819.3301435406698,455.00478468899524 903,462 C 986.6698564593302,468.99521531100476 1060.1913875598086,407.7129186602871 1148,413 C 1235.8086124401914,418.2870813397129 1337.9043062200958,490.14354066985646 1440,562 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="#996ad9"
            fillOpacity="1"
          ></path>
        </svg>
      </div>
      {/* hero text */}
      <div className="hero-section-text mt-[10%] px-[8%] relative flex-1 flex flex-col items-start text-center md:text-left">
        <h1 className="hero-title text-white text-5xl font-bold mt-[20%] animate-slide-in-left">
          {hero_header}
        </h1>
        <p className="intro-text text-white text-lg animate-slide-in-left mt-[5%]">
          {hero_description}
        </p>
        {/* hero link */}
        <div className="hero-link-text mt-[7%] flex items-center justify-center text-center z-20 group">
          <Link
            className="header-2 flex items-center text-4xl transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            to={hero_link_url}
          >
            {hero_link_title}
            <svg
              className="ml-2 mt-1"
              fill="#FFFFFF"
              height="25px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* hero image */}
      <div className="hero-section-image flex-1 relative flex items-center justify-center overflow-visible">
        <img
          src={heroImage}
          alt="Image of browser"
          className="absolute z-10 right-[15%] top-[15%] scale-[0.7] object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
