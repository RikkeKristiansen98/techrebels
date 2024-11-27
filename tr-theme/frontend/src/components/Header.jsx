import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo-1.png";
import PersonIcon from "@mui/icons-material/Person";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { useState } from 'react';

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // state för att hantera dropdownmenu

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Växla värdet för att visa/gömma dropdown-menyn
  };

  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          {" "}
          <img
            width="22%"
            style={{ marginBottom: "20px" }}
            src={logo}
            alt="Tech för alla logo"
            className="logo-image"
          />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="#">Tipsbanken</NavLink>
          </li>
          <li>
            <NavLink to="/rolemodels">Förebilder</NavLink>
          </li>
          <li>
            <NavLink to="/tipsaoss">Skicka in tips</NavLink>
          </li>
          <li className="dropdown-container">
            {/* PersonIcon används för att öppna dropdown */}
            <PersonIcon onClick={toggleDropdown} className="person-icon" />
            {/* Dropdown visas bara om showDropdown är true */}
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/login">Logga in</NavLink>
                <NavLink to="/register">Registrera nytt konto</NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
