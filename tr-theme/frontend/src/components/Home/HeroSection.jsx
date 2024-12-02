import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ title, introText }) => {
  const arrowRight = ["https://techforalla.se/images/right-arrow-white.png"];
  return (
    <div className="hero-section py-40 relative flex flex-col md:flex-row items-stretch min-h-[250px] mb-10 px-[8%] overflow-visible">
      {/* Intro text */}
      <div className="hero-section-text flex-1 flex items-center justify-center text-center md:text-left">
        <div>
          <h1 className="home-title text-5xl font-bold mb-5">{title}</h1>
          <p className="intro-text text-lg text-gray-800">{introText}</p>
        </div>
      </div>

      {/* Shape and link */}
      <div className="hero-section-link flex-1 relative flex items-center justify-center overflow-visible">
        <div className="hero-link-shapes w-full h-full relative">
          {/* Overlay shape */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-10%] w-[110%] scale-[2] h-[120%] object-cover opacity-80 z-10"
          >
            <path
              fill="#D0E6F0"
              d="M20.9,-22.9C34.9,-23.6,59.3,-30.9,65.5,-27C71.7,-23.2,59.8,-8.2,49.9,1.7C40,11.6,32.2,16.4,27.3,25.7C22.4,35,20.4,48.9,13.1,56.4C5.8,64,-6.9,65.3,-15.2,59.4C-23.5,53.5,-27.6,40.4,-34.1,30.7C-40.6,21,-49.6,14.7,-57.4,4.2C-65.1,-6.3,-71.7,-21,-68.5,-32.6C-65.2,-44.2,-52.2,-52.6,-39.2,-52.2C-26.1,-51.8,-13.1,-42.7,-4.8,-35.3C3.5,-27.8,7,-22.1,20.9,-22.9Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Underlay shape */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-59%] w-[100%] h-[200%] scale-[1.1] object-cover opacity-90 z-0"
          >
            <path
              fill="#FBE5C0"
              d="M27.4,-47C37.1,-41.9,47.6,-37.7,59.2,-30C70.8,-22.4,83.6,-11.2,77.1,-3.7C70.7,3.7,45.1,7.5,37.2,21.7C29.4,36,39.4,60.7,36.1,73.1C32.9,85.5,16.4,85.6,6.4,74.6C-3.7,63.6,-7.5,41.5,-16,32.2C-24.6,22.8,-37.9,26.2,-51,23C-64,19.7,-76.8,9.9,-80.4,-2.1C-84,-14,-78.5,-28.1,-65.1,-30.6C-51.6,-33.2,-30.2,-24.2,-18,-27.8C-5.9,-31.5,-2.9,-47.7,3,-52.9C8.9,-58,17.8,-52.1,27.4,-47Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        {/* Link text */}
        <div className="hero-link-text absolute inset-0 flex items-center justify-center text-center text-darkBlueTheme text-4xl z-20 transition-transform duration-300 hover:translate-x-2">
          <Link className="header-2 flex items-center" to="#">
            Gå till tipsbanken
            {/* <img src={arrowRight} alt="högerpil" className="w-[30px] ml-2 color-darkBlueTheme" /> */}
            <svg className="ml-5"fill="#4C5D70" height="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27,0C12.112,0,0,12.112,0,27s12.112,27,27,27s27-12.112,27-27S41.888,0,27,0z M27,52C13.215,52,2,40.785,2,27 S13.215,2,27,2s25,11.215,25,25S40.785,52,27,52z"></path> <path d="M36.644,25.946l-15.101-8.719c-0.53-0.307-1.165-0.307-1.695,0C19.317,17.534,19,18.083,19,18.696v17.438 c0,0.613,0.317,1.162,0.848,1.469c0.265,0.153,0.556,0.229,0.848,0.229c0.291,0,0.582-0.076,0.847-0.229l15.101-8.719 c0.531-0.307,0.848-0.855,0.848-1.469S37.175,26.253,36.644,25.946z M21,35.606V19.224l14.187,8.191L21,35.606z"></path> </g> </g></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
