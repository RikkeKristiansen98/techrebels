import React from "react";
import BannerButton from "./BannerButton";

const ExploreBanner = ({ banner_icons, banner_header, banner_tagline }) => {
  return (
    <div className="explore-categories flex bg-pinkTheme py-[10%] px-[10%] relative h-auto flex-col items-center text-center lg:flex-row lg:items-start lg:justify-start">
      {/* Text container */}
      <div className="text-container h-full flex flex-col flex-1 justify-center w-full mb-10 lg:mb-0 lg:w-1/2 lg:text-left">
        <div className="explore-categories-text text-white px-5 lg:px-20 relative z-1">
          <h3 className="text-5xl text-whiteTheme font-bold mb-10 drop-shadow-lg md:items-center">
            {banner_header}
          </h3>
          <p className="text-blackTheme text-xl">{banner_tagline}</p>
        </div>
      </div>
      {/* Icon container */}
      <div className="icon-container flex-1 grid xl:grid-cols-5 gap-14 xxs:gap-20 xxs:grid-cols-3 w-full lg:w-auto lg:order-last lg:text-left md:py-14 xxs:py-12">
        {banner_icons.map((icon, index) => (
          <BannerButton key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ExploreBanner;
