import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white bg-purpleTheme xxs:bg-purpleTheme sm:bg-transparent">
      <div className="relative z-20 text-center flex flex-col sm:flex-row justify-between items-center sm:ml-[4%] sm:mr-[4%] md:ml-[-4%] md:mr-[-4%]">
        <div className="flex flex-col justify-start items-center xl:gap-8 text-center xl:ml-[10%]">
          <h3 className="xl:text-3xl font-semibold xxs:mt-[4%] xxs:mb-[4%]">Prenumerera på nyhetsbrev</h3>
          <form className="flex justify-center xl:mb-[20%] sm:mb-[6%] xxs:mb-[4%]">
            <input
              type="email"
              className="w-full p-4 xl:pr-[100px] bg-white xl:text-2xl xxs:text-sm border-none outline-none rounded-l-lg"
              id="textInput"
              placeholder="Email..."
            />
            <button
              type="submit"
              className="bg-[#FF9B71] text-white xxs:text-sm xl:text-2xl font-semibold p-4 rounded-r-lg"
            >
              Skicka
            </button>
          </form>
        </div>

        <div className="xl:mr-[10%]">
          <h3 className="xl:text-3xl xxs:text-l xl:mb-[2%]">Har du frågor?</h3>
          <p className="xl:text-2xl xxs:text-sm">
            I vår {" "}
            <NavLink to="/faq" className="text-[#FF9B71] hover:text-white hover:underline">
              FAQ
            </NavLink>{" "}
            hittar du svaren på de vanligaste frågorna.
          </p>
          <p className="mt-5 xl:text-2xl xxs:text-sm">&copy; Tech för alla</p>
        </div>
      </div>
      
      {/* SVG for larger screens */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        className="absolute bottom-0 left-0 w-full max-w-full h-auto hidden xxs:block" // Hidden on xxs screens, visible on larger screens
      >
        <path
          fill="#996AD9"
          d="M0,150L48,140C96,130,192,80,288,70C384,60,480,90,576,130C672,170,768,220,864,215C960,210,1056,160,1152,135C1248,110,1344,120,1392,125L1440,130L1440,400L0,400Z"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
