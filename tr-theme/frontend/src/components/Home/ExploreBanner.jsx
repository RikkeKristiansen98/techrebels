import React from "react";
import BannerButton from "./BannerButton";

const ExploreBanner = ({ banner_icons, banner_header, banner_tagline }) => {
  return (
    <div className="explore-categories flex bg-pinkTheme py-[9%] px-[13%] relative h-auto flex-col items-center text-center lg:flex-row lg:items-start lg:justify-start">
      {/* Text container */}
      <div className="text-container h-full flex flex-col flex-1 justify-center w-full mb-10 lg:mb-0 lg:w-1/2 lg:text-left">
        <div className="explore-categories-text text-white px-5 lg:px-20 relative z-10">
          <h3 className="text-5xl text-whiteTheme font-bold mb-12 drop-shadow-lg">
            {banner_header}
          </h3>
          <p className="text-blackTheme text-xl">{banner_tagline}</p>
        </div>
      </div>
      {/* Icon container */}
      <div className=" icon-container flex-1 grid grid-cols-2 gap-12 w-full lg:w-auto lg:order-last lg:text-left">
        {banner_icons.map((icon, index) => (
          <BannerButton key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ExploreBanner;
