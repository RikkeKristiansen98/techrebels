import React, { useState } from "react";
import GridItem from "./GridItem";

const Grid = ({ gridItems }) => {

  //just nu syns inte alla böcker i biblioteket samt ska en paginerings
  //funktion finnas när det är fler än 4x4 objekt vid tor skärm men scroll
  //behållas vid liten skärm

  const [imageCache, setImageCache] = useState({}); // Cache för bilder

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {gridItems.map((gridItem) => (
        <GridItem
          gridItem={gridItem} // Skickar hela objektet
          key={gridItem.id} // Använd unika ID:n som key
          imageCache={imageCache}
        />
      ))}
    </section>
  );
};

export default Grid;