import Filter from "../components/Collection/Filter";
import Grid from "../components/Collection/Grid";
import { useCollection } from "../contexts/CollectionContext";
import Loading from "../components/Loading";

export const CollectionPage = () => {
  const {
    allGridItems,
    filteredGridItems,
    filterCollection,
    isLoading,
    error,
  } = useCollection();

  const handleFilterChange = (filters) => {
    filterCollection(filters); // Anropa filter-funktionen i context
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="relative flex flex-col justify-center items-center min-h-screen m-[20%] mb-[6%]">
        <div className="mb-[12%] relative">
          {/* Underlay shape */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-90%] w-[100%] h-[200%] scale-[2.3] object-cover opacity-90 z-0 
    xs:top-[-85%] xs:w-[95%] xs:h-[190%] xs:scale-[2] 
    xxs:top-[-80%] xxs:w-[90%] xxs:h-[180%] xxs:scale-[1.8]
    l:top-[-88%] l:w-[98%] l:h-[195%] l:scale-[2.1]"
          >
            <path
              fill="#16697A"
              d="M27.4,-47C37.1,-41.9,47.6,-37.7,59.2,-30C70.8,-22.4,83.6,-11.2,77.1,-3.7C70.7,3.7,45.1,7.5,37.2,21.7C29.4,36,39.4,60.7,36.1,73.1C32.9,85.5,16.4,85.6,6.4,74.6C-3.7,63.6,-7.5,41.5,-16,32.2C-24.6,22.8,-37.9,26.2,-51,23C-64,19.7,-76.8,9.9,-80.4,-2.1C-84,-14,-78.5,-28.1,-65.1,-30.6C-51.6,-33.2,-30.2,-24.2,-18,-27.8C-5.9,-31.5,-2.9,-47.7,3,-52.9C8.9,-58,17.8,-52.1,27.4,-47Z"
              transform="translate(100 100) rotate(-17)"
            />
          </svg>

          {/* Overlay shape */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-40%] w-[105%] h-[120%] scale-[4] right-2 object-cover opacity-80 z-0 
    xs:top-[-50%] xs:w-[105%] xs:h-[130%] xs:scale-[3.8] 
    xxs:top-[-45%] xxs:w-[110%] xxs:h-[125%] xxs:scale-[3.5]
    l:top-[-48%] l:w-[106%] l:h-[125%] l:scale-[3.7]"
          >
            <path
              fill="#A5C882"
              d="M20.9,-22.9C34.9,-23.6,59.3,-30.9,65.5,-27C71.7,-23.2,59.8,-8.2,49.9,1.7C40,11.6,32.2,16.4,27.3,25.7C22.4,35,20.4,48.9,13.1,56.4C5.8,64,-6.9,65.3,-15.2,59.4C-23.5,53.5,-27.6,40.4,-34.1,30.7C-40.6,21,-49.6,14.7,-57.4,4.2C-65.1,-6.3,-71.7,-21,-68.5,-32.6C-65.2,-44.2,-52.2,-52.6,-39.2,-52.2C-26.1,-51.8,-13.1,-42.7,-4.8,-35.3C3.5,-27.8,7,-22.1,20.9,-22.9Z"
              transform="translate(100 100)  rotate(14)"
            />
          </svg>

          <h1 className="header-1 text-white relative text-2xl sm:text-3xl lg:text-6xl font-bold text-center z-10 mb-[20%]">
            Tipsbanken
          </h1>
        </div>
        <div className="flex gap-12 mb-10">
          <Filter onFilterChange={handleFilterChange} />
          <Grid
            allGridItems={allGridItems}
            filteredGridItems={filteredGridItems}
          />
        </div>
      </div>
    </>
  );
};

export default CollectionPage;
