import React from "react";
import '../styles/footer.css';
import { NavLink } from 'react-router-dom';

/* tillfällig footer*/
const Footer = () => {
  return (
    <footer className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#3f5438" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,154.7C840,128,960,96,1080,106.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
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
