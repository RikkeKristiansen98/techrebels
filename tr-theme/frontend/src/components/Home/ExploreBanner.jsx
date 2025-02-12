import React from "react";
import BannerButton from "./BannerButton";

const ExploreBanner = ({ banner_icons, banner_header, banner_tagline }) => {
  return (
    <div className="explore-categories flex bg-pinkTheme h-96 relative my-20 flex-col sm:flex-row">
      {/* Text container */}
      <div className="text-container h-full flex flex-col justify-center w-full sm:w-1/2 relative overflow-hidden mb-2 sm:mb-0">
        <div className="explore-categories-text text-white px-5 sm:px-20 relative z-10 sm:block">
          <h3 className="text-4xl font-bold mb-2">{banner_header}</h3>
          <p>{banner_tagline}</p>
        </div>

        {/* Text container shape */}
        <div className="absolute top-0 right-0 w-full h-16 bg-purpleTheme sm:w-[200%] sm:h-[200%] sm:rounded-full xxs:hidden xs:hidden sm:block"></div>
      </div>


      {/* icons*/}
      <div className="explore-categories-icons drop-shadow-lg flex-1 flex justify-around xxs:bg-orangeTheme xs:bg-orangeTheme sm:bg-transparent">
        {banner_icons.map((icon, index) => (
          <BannerButton key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ExploreBanner;
