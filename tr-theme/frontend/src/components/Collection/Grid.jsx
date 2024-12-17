import React from "react";
import { useCollection } from "../../contexts/CollectionContext";
import GridItem from "./GridItem";

const Grid = () => {
  const { GridItems, isLoading } = useCollection();

  console.log("GridItems in Grid component:", GridItems);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="flex-grow grid grid-cols-3 gap-5">
     {GridItems.map((item, index) => (
        <GridItem key={item.id || index} id={item.id} />
      ))} 
    </section>
  );
};

export default Grid;
