import React from "react";
import '../styles/footer.css';
import { NavLink } from 'react-router-dom';
import footerbild from '../img/footer.png'; 

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerbild})` }}>
      <div className="footer-content">
        <div className="newsletter">
          <h3>Prenumerera på nyhetsbrev</h3>
          <form>
            <input type="email" placeholder="Email..." />
            <button type="submit">Skicka</button>
          </form>
        </div>
        <div className="faq">
          <h3>Har du frågor?</h3>
          <p>I vår<NavLink to="/faq" className="link"> FAQ </NavLink>
          hittar du svaren på de vanligaste frågorna.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Tech för alla</p>
      </div>
    </footer>
  );
};

export default Footer;
