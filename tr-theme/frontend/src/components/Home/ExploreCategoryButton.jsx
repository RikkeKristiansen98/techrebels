import React from "react";

const ExploreCategoryButton = ({ icon }) => {
  return (
    <div className="explore-category-button flex flex-wrap justify-center sm:justify-center items-center sm:flex-row flex-col px-5 sm:px-0 space-y-4 sm:space-x-6">
      <div className="h-auto transform transition-transform duration-200 hover:scale-105 cursor-pointer">
        <a href={icon.URL} className="explore-category-link">
          {/* Icon Image */}
          <img
            src={icon.icon}
            alt={icon.title}
            className="scale-[1.2] w-16 h-16 object-contain mb-4 invert xxs:w-10 xxs:h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12"
          />
          {/* Title */}
          <p className="text-lg font-semibold text-white xxs:text-xs xs:text-sm sm:text-sm">
            {icon.title}
          </p>
        </a>
      </div>
    </div>
  );
};

export default ExploreCategoryButton;
