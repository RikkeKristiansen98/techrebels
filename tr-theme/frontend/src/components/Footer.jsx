import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h3>Prenumerera på nyhetsbrev</h3>
          <form className="newsletter-container">
            <input
              type="email"
              className="input-email"
              id="textInput"
              placeholder="Email..."
            />
            <button type="submit" className="send-nl-btn">
              Skicka
            </button>
          </form>
        </div>

        <div className="faq">
          <h3>Har du frågor?</h3>
          <p>
            I vår{" "}
            <NavLink to="/faq" className="link">
              FAQ
            </NavLink>{" "}
            hittar du svaren på de vanligaste frågorna.
          </p>
          <p>&copy; Tech för alla</p>
        </div>
      </div>
      <div class="footer-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
          <path
            fill="#475841"
            fill-opacity="1"
            d="M0,200L48,180C96,160,192,110,288,100C384,90,480,120,576,160C672,200,768,250,864,245C960,240,1056,190,1152,165C1248,140,1344,150,1392,155L1440,160L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
