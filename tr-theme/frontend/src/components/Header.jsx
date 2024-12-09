import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logo = "https://techforalla.se/images/techforalla-logo.png";

  return (
    <header className="p-10 w-full h-[110px] flex justify-between items-center sticky top-0 z-50">
      <div className="logo z-10">
        <NavLink to="/">
          <img
            src={logo}
            alt="Tech för alla logo"
            className="max-w-[40%] min-w-[20%] ml-10 mt-14 transition-transform duration-300 ease-out hover:scale-[1.1] cursor-pointer"
          />
        </NavLink>
      </div>
      <nav className="flex gap-8 z-10">
        <NavLink
          to="#"
          className="header-2 text-2xl font-semibold text-white transition-transform duration-300 ease-out hover:scale-110"
        >
          Tipsbanken
        </NavLink>
        <NavLink
          to="/tipsaoss"
          className="header-2 text-2xl font-semibold text-white transition-transform duration-300 ease-out hover:scale-110"
        >
          Skicka in tips
        </NavLink>
      </nav>
      {/* background wave */}
      {/* <div
        className="absolute top-0 right-0 h-full w-[54%] bg-orangeTheme 
            rounded-tl-full "
      ></div> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 10 1280 250"
        className="footer-svg"
        style={{
          
          transform: "rotate(180deg) scaleX(-1)", // Vänder SVG:n upp och ner
          position: "absolute", // Gör att SVG:n kan placeras fritt
          left: 0, // Justerar den till vänster
          top: 0, // Börjar från toppen av containern
          width: "100%", // Ser till att den fyller hela bredden
          zIndex: -1, // Sätter SVG:n bakom annat innehåll
        }}
      >
        <path
          fill="#16697A"
          d="M0,150L48,140C96,130,192,80,288,70C384,60,480,90,576,130C672,170,768,220,864,215C960,210,1056,160,1152,135C1248,110,1344,120,1392,125L1440,130L1440,400L0,400Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
