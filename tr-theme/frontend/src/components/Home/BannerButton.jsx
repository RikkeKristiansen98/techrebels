import React from "react";

const BannerButton = ({ icon }) => {
  return (
    <div className="explore-category-button flex flex-wrap justify-center sm:justify-center items-center sm:flex-row flex-col px-5 sm:px-0 space-y-4 sm:space-x-6">
      <div className="h-auto transform transition-transform duration-200 hover:scale-105 cursor-pointer">
        <a href={icon.URL} className="explore-category-link justify-center items-center flex flex-col">
          {/* Icon Image */}
          <img
            src={icon.icon}
            alt={icon.title}
            className="scale-[3] w-16 h-16 object-contain mb-14 xxs:w-10 xxs:h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12"
          />
          {/* Title */}
          <p className="text-2xl font-semibold text-blackTheme xxs:text-xs xs:text-sm sm:text-lg">
            {icon.title}
          </p>
        </a>
      </div>
    </div>
  );
};

export default BannerButton;
