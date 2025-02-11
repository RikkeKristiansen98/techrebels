
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
    <div className="hero-section relative py-[1%] flex flex-col md:flex-row items-stretch min-h-[600px] overflow-visible">
      {/* wave element. */}
      <div className="absolute top-0 left-0 w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 1000"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,1000 L 0,262 C 71.35885167464113,203.96172248803828 142.71770334928226,145.92344497607655 248,153 C 353.28229665071774,160.07655502392345 492.48803827751203,232.26794258373207 609,306 C 725.511961722488,379.73205741626793 819.3301435406698,455.00478468899524 903,462 C 986.6698564593302,468.99521531100476 1060.1913875598086,407.7129186602871 1148,413 C 1235.8086124401914,418.2870813397129 1337.9043062200958,490.14354066985646 1440,762 L 1440,1000 L 0,1000 Z"
            stroke="none"
            strokeWidth="0"
            fill="#996ad9"
            fillOpacity="1"
          />
        </svg>
      </div>

    {/* DEN GAMLA / lila SVG wave)
 <div className="hero-section relative py-[3%] flex flex-col md:flex-row items-stretch min-h-[250px] overflow-visible">
      {/* wave element 
      <div className="absolute top-0 left-0 w-full h-full z-0">
  <svg
    width="100%"
    height="100%"
    id="svg-wave"
    viewBox="0 0 1440 690"
    className="absolute top-0 left-0 w-full h-full scale-[1.5] 
               xxs:scale-[2.8] xxs:top-[1%] 
               xs:scale-[2.1] xs:top-[5%] 
               sm:scale-[1] sm:top-[0%] 
               md:scale-[2.7] md:top-[0%]"
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
</div> */}

    {/*  GAMLA hero text 
      <div className="hero-section-text mt-[10%] px-[8%] relative flex-1 flex flex-col items-start text-center md:text-left">
        <h1 className="hero-title text-white text-5xl font-bold mt-[20%] animate-slide-in-left">
          {hero_header}
        </h1>
        <p className="intro-text text-white text-lg animate-slide-in-left mt-[5%]">
          {hero_description}
        </p>
*/}
      {/* hero text */}
      <div className="hero-section-text
                xxs:mt-[20%] xs:mt-[35%] sm:mt-[8%] 
                px-[7%] relative flex-1 flex flex-col 
                items-start md:text-left">
  <h1 className="hero-title text-white font-bold animate-slide-in-left 
                 xxs:text-2xl xs:text-2xl sm:text-4xl md:text-5xl 
                 xxs:mt-[60%] xs:mt-[25%] sm:mt-[20%]">
    {hero_header}
  </h1>
  <p className="intro-text text-white animate-slide-in-left 
                xxs:text-sm xs:text-base sm:text-lg md:text-xl 
                xxs:mt-[5%] xs:mt-[10%] sm:mt-[5%]">
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
      <div className="hero-section-image flex-1 relative flex items-center justify-center overflow-visible
                left-[20%] xs:absolute xs:top-[1%] xs:scale-[0.6] xs:w-full xs:h-auto
                xxs:absolute xxs:top-[-10%] xxs:w-full xxs:h-auto">
  <img
    src={heroImage}
    alt="Image of browser"
    className="absolute z-10 left-[20%] top-[15%] scale-[0.5] object-cover 
               xxs:top-[-5%] xxs:left-[-1%] xxs:scale-[0.6]" 
  />
</div>

    </div> 
  );
};

export default HeroSection;