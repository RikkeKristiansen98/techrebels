import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import menuIcon from "../images/menu.techforalla.png.png";
import closeIcon from "../images/menu.close.png.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State för att hantera menyöppning
  const logo = "https://techforalla.se/images/techforalla-logo.png";
  const location = useLocation(); // Hämta nuvarande sidans plats

  const sideElement =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-9.png";

  // Funktion för att toggla menyn
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className="relative p-10 w-full h-[110px] flex justify-between items-center top-0 z-50 bg-white">
      <div className="logo z-20">
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
            className="w-16 h-8 mb-[90%] ml-[50%] invert" // Justera storleken på ikonen och invert för att göra den vit
          />
        </button>
      </div>

        <img
          src={sideElement}
          alt="Side Element"
          className="absolute top-0 right-[-14%] w-[60%] h-auto z-10" // Placera bilden i det övre högra hörnet
        />
      

      {/* Navigationslänkar */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:relative top-0 left-0 w-full md:flex md:w-auto bg-purpleTheme md:bg-transparent z-20 flex-col md:flex-row items-center md:items-start justify-center md:justify-start`}
      >
        <NavLink
          to="/collection-page"
          className={`md:mb-[15%] xl:mb-[-10%] block py-4 pl-8 text-white md:text-xl xl:text-3xl font-semibold relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Tipsbanken
        </NavLink>
        <NavLink
          to="/tipsaoss"
          className={`md:mb-[15%] xl:mb-[-10%] block py-4 pl-8 text-white md:text-xl xl:text-3xl font-semibold relative after:absolute after:left-0 after:bottom-[-2px] after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Skicka in tips
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;


