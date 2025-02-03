import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-visible">
      <div className="relative z-20 text-center flex justify-between items-center p-12">
        <div className="flex flex-col justify-start items-center gap-8 text-center xl:ml-[10%]">
          <h3 className="text-3xl font-semibold">Prenumerera på nyhetsbrev</h3>
          <form className="flex justify-center xl:mb-[20%]">
            <input
              type="email"
              className="w-full p-3 pr-[100px] bg-white text-[20px] border-none outline-none rounded-l-lg"
              id="textInput"
              placeholder="Email..."
            />
            <button
              type="submit"
              className="bg-[#FF9B71] text-white text-[25px] font-semibold p-4 rounded-r-lg"
            >
              Skicka
            </button>
          </form>
        </div>

        <div className="xl:mr-[10%]">
          <h3 className="xl:text-3xl xl:mb-[2%]">Har du frågor?</h3>
          <p className="xl:text-2xl">
            I vår {" "}
            <NavLink to="/faq" className="text-[#FF9B71] hover:text-white hover:underline">
              FAQ
            </NavLink>{" "}
            hittar du svaren på de vanligaste frågorna.
          </p>
          <p className="mt-5 text-xl">&copy; Tech för alla</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        className="absolute bottom-0 left-0 w-full h-auto"
      >
        <path
          fill="#996AD9"
          d="M0,150L48,140C96,130,192,80,288,70C384,60,480,90,576,130C672,170,768,220,864,215C960,210,1056,160,1152,135C1248,110,1344,120,1392,125L1440,130L1440,400L0,400Z"
        ></path>
      </svg>
      <div className="text-center mt-5 text-sm text-white z-10">
        &copy; Tech för alla
      </div>
    </footer>
  );
};

export default Footer;
