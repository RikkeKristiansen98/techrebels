import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logo = "https://techforalla.se/images/robot-logo-4.png";

  return (
    <header className="bg-[#F88379] p-10 w-full h-[110px] flex justify-between items-center sticky top-0 z-50">
      <div className="logo">
        <NavLink to="/">
          <img
            src={logo}
            alt="Tech för alla logo"
            className="max-w-[25%] scale-[1.4] min-w-[20%] pb-5 ml-5 transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </NavLink>
      </div>
      <nav>
        <ul className="flex gap-8 list-none">
          <li className="text-lg">
            <NavLink
              to="#"
              className="text-2xl header-2 relative transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              Tipsbanken
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              to="/tipsaoss"
              className="text-2xl header-2 relative transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              Skicka in tips
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
