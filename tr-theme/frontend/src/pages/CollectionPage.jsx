import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Filter from "../components/Collection/Filter";
import Grid from "../components/Collection/Grid";
import { useCollection } from "../contexts/CollectionContext";
import Loading from "../components/Loading";
import TypingEffect from "react-typing-effect";

export const CollectionPage = () => {
  const { allGridItems, filteredGridItems, filterCollection, isLoading, error } = useCollection();
  const location = useLocation(); // Använd useLocation för att få åtkomst till URL-parametrar
  const [title, setTitle] = useState("Tipsbanken");

  const flowerImage =
    "http://techforalla.se/wp-content/uploads/2025/02/flowerguy.png";

  const handleFilterChange = (filters) => {
    filterCollection(filters);

    if (filters.categories.length === 0 || filters.categories.length > 1) {
      setTitle("Tipsbanken");
      return;
    }

    const selectedCategory = filters.categories[0];

    if (selectedCategory === "media") {
      setTitle("Media");
    } else if (selectedCategory === "bocker" || selectedCategory === "books") {
      setTitle("Böcker");
    } else if (selectedCategory === "toys") {
      setTitle("Leksaker");
    } else {
      setTitle("Tipsbanken");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromURL = params.get("category"); // Hämta kategori från URL-parametrarna

    if (categoryFromURL) {
      // Om en kategori finns i URL-parametrarna, applicera filtret direkt
      handleFilterChange({ categories: [categoryFromURL] });
    }
  }, [location.search]); // Kör om URL-parametern ändras

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-yellowTheme min-h-screen w-full flex flex-col justify-center items-center">
      <div className="relative flex flex-col justify-center items-center min-h-screen m-[8%] mb-[6%]">
        <div className="mb-[12%] relative">
          <div>
          <img
              src={flowerImage}
              alt=""
              className="ml-[90%] xl:mt-[-5%] xl:mb-[-17%] w-[50%]"
            />
          </div>
          <h1 className="xl:text-5xl xxs:text-3xl xl:mb-[-5%] xl:mt-[10%] xxs:mb-[15%] text-center font-bold text-blackTheme">
            <TypingEffect
              text={title}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </h1>
        </div>
        <div className="flex gap-12 mb-10">
          <Filter onFilterChange={handleFilterChange} />
          <Grid allGridItems={allGridItems} filteredGridItems={filteredGridItems} />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;

