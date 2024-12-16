import { useCollection } from "../../contexts/CollectionContext";

export const Grid = () => {
  const { collectionItems, isLoading, error } = useCollection();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="flex-grow grid grid-cols-3 gap-5">
      {collectionItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-4 rounded-lg ${
            index % 2 === 0 ? "bg-greenTheme" : "bg-blueTheme"
          }`}
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-60 h-60 rounded-lg"
          />
          <h3 className="mt-4 text-center text-lg">{item.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Grid;
