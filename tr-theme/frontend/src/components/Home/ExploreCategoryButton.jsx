import React from "react";

const ExploreCategoryButton = ({ icon }) => {
  return (
    <div className="explore-category-button flex flex-col items-center justify-center text-center">
      <div className="h-auto transform transition-transform duration-200 hover:scale-105 cursor-pointer">
        <a href={icon.URL} className="explore-category-link">
          {/* Ikonbild */}
          <img
            src={icon.icon}
            alt={icon.title}
            className="scale-[1.2] w-16 h-16 object-contain mb-4 invert"
          />
          {/* Titel */}
          <p className="text-lg font-semibold text-white">{icon.title}</p>
        </a>
      </div>
    </div>
  );
};

export default ExploreCategoryButton;
