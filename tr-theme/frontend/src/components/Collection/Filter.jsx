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

  // Just nu hittas kategorierna samt deras barn men när man trycker på checkboxen 
  // så sparas de inte i den filtrerade arrayen, se consol loggarna. 
  // Att göra: När en checkbox bockas av så ska den kategorin läggas till i den filtrerade arrayen. Typ. 

  
  useEffect(() => {
    if (categories.length > 0) {
      const groupedCategories = categories.reduce((acc, category) => {
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
    setSelectedCategories((prevCategories) => {
      const updatedCategories = prevCategories.includes(categorySlug)
        ? prevCategories.filter((slug) => slug !== categorySlug) // Ta bort kategorin om den redan är vald
        : [...prevCategories, categorySlug]; // Lägg till kategorin om den inte är vald
      return updatedCategories;
    });
  };
  

  // Uppdatera filtret när valda kategorier ändras
  useEffect(() => {
    onFilterChange({ categories: selectedCategories });
  }, [selectedCategories]);

  const toggleParent = (parentName) => {
    setOpenParents((prev) => ({
      ...prev,
      [parentName]: !prev[parentName],
    }));
  };

  return (
    <aside className="xl:w-1/6 xxs:w-[90%] xl:w-[100%] sm:w-[90%] text-blackTheme border-blackTheme">
      <h2 className="bg-pinkTheme text-center font-bold text-xl mb-5 p-3 border-4 border-blackTheme">Sortera efter</h2>
      {categories && categories.length > 0 ? (
        categories.map((parentCategory) => (
          <div
            key={parentCategory.id}
            className={`mb-5 ${openParents[parentCategory.name] ? "open" : ""}`}
          >
            <h4
              className="flex justify-between items-center text-lg font-bold cursor-pointer"
              onClick={() => toggleParent(parentCategory.name)}
            >
              {DISPLAY_NAMES[parentCategory.slug] || parentCategory.name}
              {openParents[parentCategory.name] ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </h4>
            <div
              className={`pl-5 ${
                openParents[parentCategory.name] ? "block" : "hidden"
              }`}
            >
              {parentCategory.children && parentCategory.children.length > 0 ? (
                parentCategory.children.map((childCategory) => (
                  <label key={childCategory.id} className="block">
                    <input
                      type="checkbox"
                      onChange={() => handleCategoryChange(childCategory.slug)}
                      checked={selectedCategories.includes(childCategory.slug)}
                    />{" "}
                    {childCategory.name}
                  </label>
                ))
              ) : (
                <p>Inga underkategorier tillgängliga</p>
              )}
            </div>
          </div>
        ))
      ) : (
        // Fallback när categories är tom eller laddas
        <p>Laddar kategorier...</p>
      )}
    </aside>
  );
  

};

export default Filter;
