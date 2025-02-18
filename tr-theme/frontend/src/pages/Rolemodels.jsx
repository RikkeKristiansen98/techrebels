import { Link } from "react-router-dom";
import "../styles/pages-styles/rolemodels.css";
import React, { useEffect, useState } from "react";

export const Rolemodels = () => {
  const [rolemodels, setRolemodels] = useState([]);
  const [categories, setCategories] = useState([]); // Lagra endast Areas-kategorier
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hämta förebilder
    fetch("https://techforalla.se/wp-json/wp/v2/forebilder?_embed")
      .then((response) => response.json())
      .then((data) => {
        setRolemodels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching rolemodels:", error);
        setLoading(false);
      });

    // Hämta kategorier och filtrera bort allt utom "Areas"
    fetch("https://techforalla.se/wp-json/wp/v2/categories?per_page=100")
      .then((response) => response.json())
      .then((data) => {
        // Hitta ID för "Areas"
        const areasCategory = data.find((category) => category.name === "Areas");

        if (!areasCategory) {
          console.error("Hittade inte 'Areas'-kategorin!");
          return;
        }

        // Filtrera så att vi bara får underkategorier till "Areas"
        const filteredCategories = data.filter(
          (category) => category.parent === areasCategory.id
        );

        console.log("Hämtade kategorier från Areas:", filteredCategories);
        setCategories(filteredCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Filtrera rollmodeller baserat på vald kategori
  const filteredRolemodels = selectedCategory
    ? rolemodels.filter((rolemodel) =>
        rolemodel.categories && rolemodel.categories.includes(parseInt(selectedCategory))
      )
    : rolemodels;

  return (
    <div className="rolemodels-container">
      <h1 className="rolemodels-title">Förebilder</h1>

      <div className="hero">
        {/* Kategoriknappar */}
        <div className="category-rolemodels-section">
          <div className="category-rolemodels-grid">
            <button className="c-btn" onClick={() => setSelectedCategory(null)}>
              Alla
            </button>

            {categories.length > 0 ? (
              categories.map((category) => (
                <button
                  key={category.id}
                  className="c-btn"
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))
            ) : (
              <p>Laddar kategorier...</p>
            )}
          </div>
        </div>

        {loading && <p>Laddar förebilder...</p>}

        {/* Grid-sektion för bilder av förebilderna */}
        <div className="grid-container">
          {filteredRolemodels.length > 0 ? (
            filteredRolemodels.map((rolemodel) => (
              <div className="grid-item" key={rolemodel.id}>
                {rolemodel._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                  <img
                    src={rolemodel._embedded["wp:featuredmedia"][0].source_url}
                    alt={rolemodel.title.rendered}
                  />
                ) : (
                  <div className="fallback-placeholder">Ingen bild tillgänglig</div>
                )}
                <Link to={`/rolemodel/${rolemodel.slug}`}>
                  {rolemodel.title.rendered}
                </Link>
              </div>
            ))
          ) : (
            !loading && <p>Inga förebilder hittades.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rolemodels;
