import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({
  hero_header,
  hero_description,
  hero_link_title,
  hero_link_url,
}) => {
  return (
    <div className="hero-section py-60 relative flex flex-col md:flex-row items-stretch min-h-[250px] mb-10 px-[8%] overflow-visile">
      {/* Intro text */}
      <div className="hero-section-text flex-1 flex items-center justify-center text-center md:text-left">
        <div>
          <h1 className="home-title text-5xl font-bold mb-5">{hero_header}</h1>
          <p className="intro-text text-lg text-gray-800">{hero_description}</p>
        </div>
      </div>

      {/* Shape and link */}
      <div className="hero-section-link flex-1 relative flex items-center justify-center overflow-visible">
        <div className="hero-link-shapes w-full h-full relative">
          {/* Overlay shape */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-59%] w-[100%] h-[200%] scale-[1.1] object-cover opacity-90 z-0"
          >
            <path
              fill="#16697A"
              d="M27.4,-47C37.1,-41.9,47.6,-37.7,59.2,-30C70.8,-22.4,83.6,-11.2,77.1,-3.7C70.7,3.7,45.1,7.5,37.2,21.7C29.4,36,39.4,60.7,36.1,73.1C32.9,85.5,16.4,85.6,6.4,74.6C-3.7,63.6,-7.5,41.5,-16,32.2C-24.6,22.8,-37.9,26.2,-51,23C-64,19.7,-76.8,9.9,-80.4,-2.1C-84,-14,-78.5,-28.1,-65.1,-30.6C-51.6,-33.2,-30.2,-24.2,-18,-27.8C-5.9,-31.5,-2.9,-47.7,3,-52.9C8.9,-58,17.8,-52.1,27.4,-47Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Underlay shape */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-10%] w-[105%] scale-[2] h-[120%] object-cover opacity-80 z-0"
          >
            <path
              fill="#A5C882"
              d="M20.9,-22.9C34.9,-23.6,59.3,-30.9,65.5,-27C71.7,-23.2,59.8,-8.2,49.9,1.7C40,11.6,32.2,16.4,27.3,25.7C22.4,35,20.4,48.9,13.1,56.4C5.8,64,-6.9,65.3,-15.2,59.4C-23.5,53.5,-27.6,40.4,-34.1,30.7C-40.6,21,-49.6,14.7,-57.4,4.2C-65.1,-6.3,-71.7,-21,-68.5,-32.6C-65.2,-44.2,-52.2,-52.6,-39.2,-52.2C-26.1,-51.8,-13.1,-42.7,-4.8,-35.3C3.5,-27.8,7,-22.1,20.9,-22.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        {/* Link text */}
        <div className="hero-link-text absolute inset-0 flex items-center justify-center text-center z-20 transition-transform duration-300 hover:translate-x-2">
          <Link
            className="header-2 flex items-center text-4xl"
            to={hero_link_url}
          >
            {hero_link_title}
            {/* <img src={arrowRight} alt="högerpil" className="w-[30px] ml-2 color-darkBlueTheme" /> */}
            <svg
              className="ml-2 mt-1"
              fill="#FFFFFF"
              height="25px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
