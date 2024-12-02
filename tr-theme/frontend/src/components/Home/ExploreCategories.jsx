import React from "react";
import { Link } from "react-router-dom";

const ExploreCategories = () => {
  const categories = [
    { name: "Böcker", link: "/books" },
    { name: "Media", link: null },
    { name: "Leksaker", link: "/toys" },
    { name: "Föreningar", link: null },
  ];

  return (
    
    <div className="explore-categories flex bg-pinkTheme h-64 w-screen">
      
      <div className="text-container bg-darkGreen h-full flex flex-col justify-center">
        <div className="explore-categories-text">
          <h3>Utforska olika kategorier</h3>
          <p>Få inspiration från böcker, media, föreningar och mer!</p>
        </div>
        
      </div>
      <div className="explore-categories-buttons flex-1 flex items-center justify-around">
        {categories.map((category, index) => (
          <div key={index} className="explore-category-button">
            {category.link ? (
              <Link to={category.link} className="explore-category-link">
                {category.name}
              </Link>
            ) : (
              <span className="explore-category-name">{category.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
