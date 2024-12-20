import React, { useState, useEffect } from "react";
import { useCollection } from "../../contexts/CollectionContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const Filter = ({ onFilterChange }) => {
  const { categories } = useCollection(); // Hämta kategorier från context
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryGroups, setCategoryGroups] = useState({});
  const [openParents, setOpenParents] = useState({});

  const DISPLAY_NAMES = {
    ages: "Åldersgrupper",
    areas: "Områden",
    topics: "Ämnen",
  };

  useEffect(() => {
    if (categories.length > 0) {
      const groupedCategories = categories.reduce((acc, category) => {
        // Avgör vilken huvudgrupp kategorin tillhör baserat på länken
        if (category.link.includes("/ages")) {
          if (!acc["Ages"]) acc["Ages"] = [];
          acc["Ages"].push(category);
        } else if (category.link.includes("/areas")) {
          if (!acc["Areas"]) acc["Areas"] = [];
          acc["Areas"].push(category);
        } else if (category.link.includes("/topics")) {
          if (!acc["Topics"]) acc["Topics"] = [];
          acc["Topics"].push(category);
        } 
        return acc;
      }, {});

      setCategoryGroups(groupedCategories);
    }
  }, [categories]);

  const handleCategoryChange = (categorySlug) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categorySlug)
        ? prevCategories.filter((slug) => slug !== categorySlug)
        : [...prevCategories, categorySlug]
    );
  };
  
  const toggleParent = (parentName) => {
    setOpenParents((prev) => ({
      ...prev,
      [parentName]: !prev[parentName],
    }));
  };

  useEffect(() => {
    onFilterChange({ categories: selectedCategories });
  }, [selectedCategories]);

  return (
    <aside className="w-1/6 text-black">
      <h2 className="text-2xl mb-5 pb-2 border-b">Filter</h2>
      {categories.map((parentCategory) => (
        <div key={parentCategory.id} className={`mb-5 ${openParents[parentCategory.name] ? "open" : ""}`}>
          <h4
            className="flex justify-between items-center text-lg font-bold cursor-pointer"
            onClick={() => toggleParent(parentCategory.name)}
          >
            {DISPLAY_NAMES[parentCategory.slug] || parentCategory.name}
            {openParents[parentCategory.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </h4>
          <div className={`pl-5 ${openParents[parentCategory.name] ? "block" : "hidden"}`}>
            {parentCategory.children.map((childCategory) => (
              <label key={childCategory.id} className="block">
                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange(childCategory.slug)}
                  checked={selectedCategories.includes(childCategory.slug)}
                />{" "}
                {childCategory.name}
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Filter;
