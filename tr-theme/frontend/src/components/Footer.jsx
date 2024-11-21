import React from "react";
import '../styles/footer.css';
import { NavLink } from 'react-router-dom';
const footerImagePath = 'https://techforalla.se/images/footer.png';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerImagePath})` }}>
      <div className="footer-content">
        <div className="logo">
          {/* Här kommer loggan att placeras */}
        </div>
        <div className="newsletter">
          <h3>Prenumerera på nyhetsbrev</h3>
          <form>
            <div className="newsletter-container">
              <input type="email" className="input-email" id="textInput" placeholder="Email..." />
              <button type="submit" className="send-nl-btn">Skicka</button>
            </div>
          </form>
        </div>
        <div className="faq">
          <h3>Har du frågor?</h3>
          <p>I vår <NavLink to="/faq" className="link">FAQ</NavLink> hittar du svaren på de vanligaste frågorna.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Tech för alla</p>
      </div>
    </footer>
  );
};

export default Footer;