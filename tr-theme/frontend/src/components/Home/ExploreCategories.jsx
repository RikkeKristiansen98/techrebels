import React from "react";
import ExploreCategoryButton from "./ExploreCategoryButton";

const ExploreCategories = () => {
  const categories = [
    { name: "Böcker", link: "/books", image: "https://techforalla.se/images/open-book-icon.png"},
    { name: "Media", link: null, image: "https://techforalla.se/images/media-icon.png" },
    { name: "Leksaker", link: "/toys", image: "https://techforalla.se/images/toy-box-icon.png" },
    { name: "Förebilder", link: null, image: "https://techforalla.se/images/role-model-icon.png" },
  ];

  return (
    <div className="explore-categories flex bg-blueTheme h-64 relative my-20">
      {/* Text container*/}
      <div className="text-container h-full flex flex-col justify-center w-1/2 relative overflow-hidden">
        <div className="explore-categories-text text-white px-20 relative z-10">
          <h3 className="text-4xl font-bold mb-2">Utforska olika kategorier</h3>
          <p>Få inspiration från böcker, media, föreningar och mer!</p>
        </div>

        {/* Text container shape */}
        <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-orangeTheme rounded-full"></div>
      </div>

      {/* Buttons */}
      
      <div className="explore-categories-buttons flex-1 flex justify-around">
        {categories.map((category, index) => (
          <ExploreCategoryButton key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
