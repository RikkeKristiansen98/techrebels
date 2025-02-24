import CollectionItemSection from "../components/CollectionItem/CollectionItemSection";

export const CollectionItemPage = () => {

  const borderElement = "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-1-e1740393062433.png";

  return (
    <div className="bg-yellowTheme flex flex-col items-center bg-orangeTheme h-auto lg:flex-row lg:items-start lg:justify-between py-10 md:py-[10%] lg:py-[7%] lg:pb-[10%]">
      <CollectionItemSection />
    </div>
  );
};

export default CollectionItemPage;
