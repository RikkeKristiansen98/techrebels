import React from "react";
import BannerButton from "./BannerButton";

const ExploreBanner = ({ banner_icons, banner_header, banner_tagline }) => {
  return (
    <div className="explore-categories flex bg-pinkTheme py-[10%] px-[10%] relative h-auto flex-col lg:flex-row lg:items-center lg:justify-between">
      {/* Text container */}
      <div className="explore-categories-text text-white px-5 lg:px-20 relative z-1">
        <h3 className="xl:text-3xl md:text-4xl text-whiteTheme font-bold mb-5 drop-shadow-lg md:items-center">
          {banner_header}
        </h3>
        <p className="text-blackTheme xl:text-base md:text-xl">{banner_tagline}</p>
      </div>
      {/* Icon container */}
      <div className="icon-container flex-1 grid xl:grid-cols-5 xl:gap-33 xxs:gap-20 xxs:grid-cols-3 w-full lg:w-auto lg:order-last lg:text-left md:py-14 xxs:py-12">
        {banner_icons.map((icon, index) => (
          <BannerButton key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ExploreBanner;
