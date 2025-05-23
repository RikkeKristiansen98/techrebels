import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const borderElement = "http://techforalla.se/wp-content/uploads/2025/02/bottom-border-e1739376496434.png";

  return (
    <footer className="relative text-whiteTheme xxs:bg-blackTheme sm:bg-blackTheme xl:bg-blackTheme py-[4%]">
      <div className="relative z-20 text-center flex flex-col sm:flex-row justify-between items-center sm:ml-[4%] sm:mr-[4%] md:ml-[5%] md:mr-[5%]">

        {/* Navigationslänkar*/}
        <nav className="flex flex-col items-center text-center xl:ml-[10%]">
          <NavLink
            to="/home"
            className="block py-2 text-whiteTheme font-semibold transition-transform duration-300 ease-out hover:-translate-y-1 hover:text-orangeTheme"
          >
            Hem
          </NavLink>
          <NavLink
            to="/collection-page"
            className="block py-2 text-whiteTheme font-semibold transition-transform duration-300 ease-out hover:-translate-y-1 hover:text-orangeTheme"
          >
            Tipsbanken
          </NavLink>
          <NavLink
            to="/tipsaoss"
            className="block py-2 text-whiteTheme font-semibold transition-transform duration-300 ease-out hover:-translate-y-1 hover:text-orangeTheme"
          >
            Kontakt
          </NavLink>
          <NavLink
            to="/rolemodels"
            className="block py-2 text-whiteTheme font-semibold transition-transform duration-300 ease-out hover:-translate-y-1 hover:text-orangeTheme"
          >
            Förebilder
          </NavLink>
        </nav>
        <div className="xl:w-[30%] p-6 border-dashed border-4 border-whiteTheme md:m-[5%] xxs:w-[59%] xxs:p-4 xxs:mt-[5%]">
          <h2 className="font-semibold">Vi som utvecklat denna sida heter Märta, Mikah och Rikke. Syftet är att främja ett intresse kring IT hos tjejer och icke-binära. Vill du att vi gör en sida åt dig? kontakta oss <a
            href="https://genzconsulting.se/kontakt/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pinkTheme"
          >
            här!
          </a>
          </h2>
        </div>

        <div className="xl:mr-[10%] xxs:mb-[5%] xxs:mt-[5%] text-center">
          <h3 className="xl:text-2xl xxs:text-l xl:mb-[2%]">Har du frågor?</h3>
          <p className="xl:text-xl xxs:text-sm">
            I vår{" "}
            <NavLink to="/faq" className="text-orangeTheme font-bold hover:text-pinkTheme hover:underline">
              FAQ
            </NavLink>{" "}
            hittar du svaren på de vanligaste frågorna.
          </p>
          <p className="mt-5 xl:text-xl xxs:text-sm">&copy; Tech för alla</p>
        </div>
      </div>

      {/* border */}
      <img
        src={borderElement}
        loading="lazy"
        alt="Tech för alla logo"
        className="absolute top-0 right-0 z-0 w-full h-auto bg-yellowTheme"
      />
    </footer>
  );
};

export default Footer;
