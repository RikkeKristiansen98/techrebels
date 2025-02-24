import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {

  const borderElement = "http://techforalla.se/wp-content/uploads/2025/02/bottom-border-e1739376496434.png"
  return (
    <footer className="relative text-whiteTheme xxs:bg-blackTheme sm:bg-blackTheme xl:bg-blackTheme py-[7%] ">
      <div className="relative z-20 text-center flex flex-col sm:flex-row justify-between items-center sm:ml-[4%] sm:mr-[4%] md:ml-[5%] md:mr-[5%]">
        <div className="flex flex-col justify-start items-center xl:gap-8 text-center xl:ml-[10%]">
          <h3 className="xl:text-2xl font-semibold xxs:mt-[10%] xxs:mb-[2%]">Prenumerera på nyhetsbrev</h3>
          <form className="flex justify-center xl:mb-[20%] sm:mb-[6%] xxs:mb-[4%]">
            <input
              type="email"
              className="w-full p-4 xl:pr-[100px] bg-white xl:text-2xl xxs:text-sm xl:border-t-4 xxs:border-t-2 xxs:border-l-2 xxs:border-b-2 xl:border-l-4 xl:border-r-2 xl:border-b-4 border-blackTheme outline-none rounded-l-lg"
              id="textInput"
              placeholder="Email..."
            />
            <button
              type="submit"
              className="bg-orange-500 xxs:border-t-2 xxs:border-r-2 xxs:border-b-2 xxs:border-l-2 xl:border-t-4 xl:border-r-4 xl:border-b-4 xl:border-l-2 border-blackTheme text-blackTheme xxs:text-sm xl:text-2xl font-semibold p-4 rounded-r-lg"
            >
              Skicka
            </button>
          </form>
        </div>

        <div className="xl:mr-[10%] xxs:mb-[5%] xxs:mt-[5%]">
          <h3 className="xl:text-3xl xxs:text-l xl:mb-[2%]">Har du frågor?</h3>
          <p className="xl:text-2xl xxs:text-sm">
            I vår{" "}
            <NavLink to="/faq" className="text-orangeTheme font-bold hover:text-pinkTheme hover:underline">
              FAQ
            </NavLink>{" "}
            hittar du svaren på de vanligaste frågorna.
          </p>
          <p className="mt-5 xl:text-2xl xxs:text-sm">&copy; Tech för alla</p>
        </div>
      </div>

      {/* border  */}
      <img
        src={borderElement}
        alt="Tech för alla logo"
        className="absolute top-0 right-0 z-0 w-full h-auto bg-yellowTheme"
      />

      {/* SVG for larger screens */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        className="absolute bottom-0 left-0 w-full h-auto" // För att täcka hela sidbredden
      >
        <path
          fill="#251A09"
          d="M0,150L48,140C96,130,192,80,288,70C384,60,480,90,576,130C672,170,768,220,864,215C960,210,1056,160,1152,135C1248,110,1344,120,1392,125L1440,130L1440,400L0,400Z"
        ></path>
      </svg> */}
    </footer>
  );
};

export default Footer;

