import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo-robot-1.png";
import PersonIcon from "@mui/icons-material/Person";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          {" "}
          <img width="12%" style={{ marginBottom: "20px" }} src={logo} alt="Tech för alla logo" className="logo-image" />
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
          <li>
            <NavLink to="/register">
              <PersonIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
