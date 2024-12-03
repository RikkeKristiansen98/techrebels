import React from "react";
import "../styles/components-styles/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h3 className="header-2 text-xl">Prenumerera på nyhetsbrev</h3>
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
            <NavLink to="/faq" className="faq-link">
              FAQ
            </NavLink>{" "}
            hittar du svaren på de vanligaste frågorna.
          </p>
          <p>&copy; Tech för alla</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        className="footer-svg"
      >
        <path
          fill="#16697A"
          d="M0,150L48,140C96,130,192,80,288,70C384,60,480,90,576,130C672,170,768,220,864,215C960,210,1056,160,1152,135C1248,110,1344,120,1392,125L1440,130L1440,400L0,400Z"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
