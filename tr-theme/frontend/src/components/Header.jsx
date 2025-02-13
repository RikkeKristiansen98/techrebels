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
    <header className="relative p-[2%] w-full h-[100px] flex justify-between items-center top-0 z-50 bg-blackTheme">
      <div className="logo z-20">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Tech för alla logo"
            className="h-auto max-w-[300px] transition-transform duration-300 ease-out hover:scale-[1.05] cursor-pointer"
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


      {/* Navigationslänkar */}
      <nav
        className={`${isOpen ? "block" : "hidden"
          } absolute md:relative top-0 left-0 w-full md:flex md:w-auto bg-purpleTheme md:bg-transparent z-20 flex-col md:flex-row items-center justify-center`}
      >
         <NavLink
          to="/home"
          className={`block py-4 px-8 text-whiteTheme header-2 md:text-xl xl:text-3xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Hem
        </NavLink>
        <NavLink
          to="/collection-page"
          className={`block py-4 px-8 text-whiteTheme header-2 md:text-xl xl:text-3xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Tipsbanken
        </NavLink>
        <NavLink
          to="/tipsaoss"
          className={`block py-4 px-8 text-whiteTheme header-2 md:text-xl xl:text-3xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          Skicka in tips
        </NavLink>
        <NavLink
          to="/faq"
          className={`block py-4 px-8 text-whiteTheme header-2 md:text-xl xl:text-3xl font-semibold transition-transform duration-300 ease-out hover:-translate-y-1`}
          onClick={toggleMenu} // Stäng menyn när en länk klickas
        >
          FAQ
        </NavLink>
      </nav>

    </header>
  );
};

export default Header;


