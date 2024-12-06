import React from "react";
import ExploreCategoryButton from "./ExploreCategoryButton";

const ExploreCategories = ({ banner_icons, banner_header, banner_tagline }) => {
  return (
    <div className="explore-categories flex bg-blueTheme h-64 relative my-20">
      {/* Text container*/}
      <div className="text-container h-full flex flex-col justify-center w-1/2 relative overflow-hidden">
        <div className="explore-categories-text text-white px-20 relative z-10">
          <h3 className="text-4xl font-bold mb-2">{banner_header}</h3>
          <p>{banner_tagline}</p>
        </div>

        {/* Text container shape */}
        <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-orangeTheme rounded-full"></div>
      </div>

      {/* Buttons */}

      <div className="explore-categories-buttons flex-1 flex justify-around">
        {banner_icons.map((icon, index) => (
          <ExploreCategoryButton key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
