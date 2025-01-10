import { NavLink } from "react-router-dom";

export const Header = () => {
  const logo = "https://techforalla.se/images/techforalla-logo.png";

  return (
    <header className="p-10 w-full h-[110px] flex justify-between items-center sticky top-0 z-50">
      <div className="logo z-10">
        <NavLink to="/">
          <img
            src={logo}
            alt="Tech för alla logo"
            className="max-w-[40%] min-w-[20%] ml-10 mt-14 transition-transform duration-300 ease-out hover:scale-[1.1] cursor-pointer xxs:max-w-[80%] sm:max-w-[50%] xs:max-w-[25%] xl:max-w-[40%]"
          />
        </NavLink>
      </div>
      <nav className="flex gap-8 z-10 xs:gap-8 text-center">
        <NavLink
          to="/collection-page"
          className="header-2 xxs:mt-[-28%] xxs:text-sm xs:text-lg sm:mt-[4%] sm:text-3xl md:mt-[15%] l:text-lg lg:text-xl xl:text-3xl xl:mt-[14%] 2xl:text-4xl font-semibold text-white transition-transform duration-300 ease-out hover:scale-110"
        >
          Tipsbanken
        </NavLink>
        <NavLink
          to="/tipsaoss"
          className="header-2 xxs:mt-[-28%] xxs:text-sm xs:mb-[6%] xs:text-lg sm:mt-[4%] sm:text-3xl md:mt-[15%] l:text-lg lg:text-xl xl:text-2xl xl:mt-[14%] 2xl:text-4xl font-semibold text-white transition-transform duration-300 ease-out hover:scale-110"
        >
          Skicka in tips
        </NavLink>
      </nav>

      <svg
        className="h-[20vh] xl:h-[auto] lg:h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 10 1280 250"
        style={{
          transform: "rotate(180deg) scaleX(-1)", // Vänder SVG:n upp och ner
          position: "absolute", // Gör att SVG:n kan placeras fritt
          left: 0, // Justerar den till vänster
          top: 0, // Börjar från toppen av containern
          width: "100%", // Ser till att den fyller hela bredden
          zIndex: -1, // Sätter SVG:n bakom annat innehåll
        }}
      >
        <path
          fill="#16697A"
          d="M0,150L48,140C96,130,192,80,288,70C384,60,480,90,576,130C672,170,768,220,864,215C960,210,1056,160,1152,135C1248,110,1344,120,1392,125L1440,130L1440,400L0,400Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
