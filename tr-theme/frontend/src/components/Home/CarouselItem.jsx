import React from "react";

const CarouselItem = ({ carouselItem }) => {
  return (
    <div className="w-full h-54 bg-white shadow-lg rounded-lg  flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <img
        src={carouselItem}
        alt="Carousel Item"
        className="w-full h-54 object-cover rounded-lg"
      />
    </div>
  );
};

export default CarouselItem;