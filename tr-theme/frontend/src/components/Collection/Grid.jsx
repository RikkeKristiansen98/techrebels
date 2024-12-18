import React, { useState } from "react";
import GridItem from "./GridItem";

const Grid = ({ gridItems }) => {
  const [imageCache, setImageCache] = useState({}); // Cache för bilder

  return (
    <section className="flex-grow grid grid-cols-3 gap-5">
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
