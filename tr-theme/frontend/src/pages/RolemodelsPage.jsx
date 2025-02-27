import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TypingEffect from "react-typing-effect";

export const RolemodelsPage = () => {
  const [rolemodels, setRolemodels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const rolemodelsElement =
    "http://techforalla.se/wp-content/uploads/2025/02/rolemodels-e1740402607339.png";

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
        const areasCategory = data.find((category) => category.name === "Areas");
        if (!areasCategory) {
          console.error("Hittade inte 'Areas'-kategorin!");
          return;
        }
        const filteredCategories = data.filter(
          (category) => category.parent === areasCategory.id
        );
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
        rolemodel.categories &&
        rolemodel.categories.includes(parseInt(selectedCategory))
      )
    : rolemodels;

  // Kombinerar "Alla" med de hämtade kategorierna i en gemensam array
  const allButtons = [{ id: null, name: "Alla" }, ...categories];

  return (
<div className="flex flex-col items-center justify-start min-h-screen bg-yellowTheme py-1 pb-20">
  {/* Wrapper för rubrik + bild i flex-row */}
  <div className="flex flex-row items-center justify-center gap-4 mt-8">
    <div className="min-w-[250px] flex justify-center">
      <h1 className="xl:text-5xl xxs:text-3xl xs:text-5xl font-semibold text-blackTheme text-center">
        <TypingEffect
          text="Förebilder"
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
        />
      </h1>
    </div>

    <img
      src={rolemodelsElement}
      loading="lazy"
      alt="Decorative element"
      className="w-[20%] h-auto object-contain rotate-1 animate-slide-in-right-rotate"
    />
  </div>


      {/* Rendera knappsektionen bara när kategoridata är laddad */}
      {categories.length > 0 ? (
        <div className="mb-10 mt-6">
          <div className="flex flex-wrap justify-center gap-4">
            {allButtons.map((category) => (
              <button
                key={category.id ?? "alla"}
                onClick={() => handleCategoryChange(category.id)}
                className="bg-orange-500 border-blackTheme border-2 shadow-[4px_4px_3px_rgba(0,0,0,0.6)] rounded-lg px-4 py-2 flex items-center text-blackTheme text-sm sm:text-base lg:text-lg font-bold transition-transform duration-200 ease-in-out hover:scale-95 active:scale-90 mb-5 xxs:m-1"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-blackTheme mt-4">Laddar kategorier...</p>
      )}

      {loading && <p className="text-lg text-blackTheme mt-4">Laddar förebilder...</p>}

      {/* Grid-sektion för bilder av förebilderna */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {filteredRolemodels.length > 0 ? (
          filteredRolemodels.map((rolemodel) => (
            <div
              key={rolemodel.id}
              className="flex flex-col items-center bg-whiteTheme p-4 border-4 border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6)]"
            >
              {rolemodel._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                <img
                  src={rolemodel._embedded["wp:featuredmedia"][0].source_url}
                  alt={rolemodel.title.rendered}
                  className="w-full h-48 object-cover mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  Ingen bild tillgänglig
                </div>
              )}
              <Link
                to={`/rolemodel/${rolemodel.slug}`}
                className="text-xl font-semibold text-blackTheme hover:text-[#E49AE0] transition-colors"
              >
                {rolemodel.title.rendered}
              </Link>
            </div>
          ))
        ) : (
          !loading && (
            <p className="text-lg text-blackTheme">
              Inga förebilder hittades.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default RolemodelsPage;
