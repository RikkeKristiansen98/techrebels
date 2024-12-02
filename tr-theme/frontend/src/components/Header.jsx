import { NavLink } from "react-router-dom";
import "../styles/components-styles/header.css";
import { useState } from "react";

//om inloggningsfunktionalitet ska implementeras
// import PersonIcon from "@mui/icons-material/Person";
// import { Login } from "../pages/Login";
// import { Register } from "../pages/Register";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // state för att hantera dropdownmenu

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Växla värdet för att visa/gömma dropdown-menyn
  };

  const logo = [
    "https://techforalla.se/images/logo-1.png"
  ];

  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="Tech för alla logo" className="logo-image" />
        </NavLink>
      </div>
      <nav>
        <ul className="header-2">
          <li>
            <NavLink to="#">Tipsbanken</NavLink>
          </li>
          
          <li>
            <NavLink to="/tipsaoss">Skicka in tips</NavLink>
          </li>
          {/* 
          Om inloggningsfunktionalitet ska implementeras
          
          <li className="dropdown-container">
            <PersonIcon onClick={toggleDropdown} className="person-icon" />
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/login">Logga in</NavLink>
                <NavLink to="/register">Registrera nytt konto</NavLink>
              </div>
            )}
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
