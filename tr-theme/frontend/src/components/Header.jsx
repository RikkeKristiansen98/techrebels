import { useState } from "react";
import { NavLink } from "react-router-dom";
import menuIcon from "../images/menu.techforalla.png.png";
import closeIcon from "../images/menu.close.png.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State för att hantera menyöppning
  const logo = "https://techforalla.se/images/techforalla-logo.png";

  // Funktion för att toggla menyn
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-10 w-full h-[110px] flex justify-between items-center sticky top-0 z-50 bg-white">
      <div className="logo z-10">
        <NavLink to="/">
          <img
            src={logo}
            alt="Tech för alla logo"
            className="xxs:w-[40%] xxs:ml-[-5%] xxs:mb-[10%] sm:w-[40%] md:w-[50%] md:ml-[2%] lg:w-[40%] xl:w-[40%] xl:mb-[-3%] h-auto ml-[5%] mt-[5%] transition-transform duration-300 ease-out hover:scale-[1.1] cursor-pointer"
            />
        </NavLink>
      </div>

      {/* Hamburgerikon för små skärmar */}
      <div className="md:hidden z-20">
        <button onClick={toggleMenu} className="text-3xl text-white">
          <img
            src={isOpen ? closeIcon : menuIcon} // Visa antingen stängikonen eller hamburgermenyn
            alt={isOpen ? "Stäng meny" : "Öppna meny"} // Alternativ text för tillgänglighet
            className="w-8 h-8 mb-[90%] ml-[50%] invert" // Justera storleken på ikonen och invert för att göra den vit
          />
        </button>
      </div>

      {/* Navigationslänkar */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:relative top-0 left-0 w-full md:flex md:w-auto bg-[#16697A] md:bg-transparent z-10 flex-col md:flex-row items-center justify-center`}
      >
        <NavLink
          to="/collection-page"
          className="md:mb-[15%] xl:mb-[-10%] block py-4 px-8 text-white md:text-lg font-semibold transition-transform duration-300 ease-out hover:scale-110"
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Tipsbanken
        </NavLink>
        <NavLink
          to="/tipsaoss"
          className="md:mb-[15%] xl:mb-[-10%] block py-4 px-8 text-white md:text-lg font-semibold transition-transform duration-300 ease-out hover:scale-110"
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Skicka in tips
        </NavLink>
      </nav>

      <svg
        className="h-[20vh] xl:h-[auto] lg:h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 10 1280 250"
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
