import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import menuIcon from "../images/menu.techforalla.png.png";
import closeIcon from "../images/menu.close.png.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State för att hantera menyöppning
  const logo = "http://techforalla.se/wp-content/uploads/2025/02/techforalla-logooo-e1739365580571.png";
  const location = useLocation(); // Hämta nuvarande sidans plats


  // Funktion för att toggla menyn
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className="relative p-[3%] w-full h-[100px] flex justify-between items-center top-0 z-50 bg-blackTheme">
      <div className="logo z-20">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            loading="lazy"
            alt="Tech för alla logo"
            className="h-auto xl:max-w-[30%] xxs:w-[60%] md:w-[40%] transition-transform duration-300 ease-out hover:scale-[1.05] cursor-pointer"
          />
        </NavLink>
      </div>


      {/* Hamburgerikon för små skärmar */}
      <div className="xl:hidden z-50">
        <button onClick={toggleMenu} className="text-3xl text-white">
          <img
            src={isOpen ? closeIcon : menuIcon} // Visa antingen stängikonen eller hamburgermenyn
            alt={isOpen ? "Stäng meny" : "Öppna meny"} // Alternativ text för tillgänglighet
            loading="lazy"
            className="xxs:h-6 xxs:ml-[-15%] invert w-44 md:h-14" // Justera storleken på ikonen och invert för att göra den vit
          />
        </button>
      </div>


      {/* Navigationslänkar */}
      <nav
        className={`${isOpen ? "block" : "hidden"
          } bg-blackTheme absolute xl:relative top-0 xl:left-22 2xl:left-37 xxs:left-0 md:left-0 w-full xl:flex bg-purpleTheme xl:bg-transparent z-20 flex-col xl:flex-row items-center justify-center`}
      >
        <NavLink
          to="/home"
          className={`block py-4 xxs:px-8 text-whiteTheme header-2 md:text-2xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Hem
        </NavLink>
        <NavLink
          to="/collection-page"
          className={`block py-4 px-8 text-whiteTheme header-2 md:text-2xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Tipsbanken
        </NavLink>
        <NavLink
          to="/tipsaoss"
          className={`block py-4 xxs:px-8 text-whiteTheme header-2 md:text-2xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Tipsa oss
        </NavLink>
        <NavLink
          to="/faq"
          className={`block py-4 px-8 text-whiteTheme header-2 md:text-2xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          FAQ
        </NavLink>
      </nav>

    </header>
  );
};

export default Header;


