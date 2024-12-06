import React from "react";
import { Link } from "react-router-dom";

const ExploreCategoryButton = ({ category }) => {
  return (
    <div className="explore-category-button flex flex-col items-center justify-center text-center">
      <img
        src={category.image}
        alt={category.name}
        className="w-16 h-16 object-contain mb-4 transform transition-transform duration-200 hover:scale-105 cursor-pointer invert brightness-0"
      />
      {category.link ? (
        <Link to={category.link} className="explore-category-link text-lg font-semibold text-white">
          {category.name}
        </Link>
      ) : (
        <span className="explore-category-name text-lg font-semibold text-gray-800">
          {category.name}
        </span>
      )}
    </div>
  );
};

export default ExploreCategoryButton;
