import React from "react";

const CarouselCard = ({ card }) => {
  return (
    <div className="w-full h-54 bg-white shadow-lg rounded-lg  flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <img
        src={card}
        alt="Carousel Card"
        className="w-full h-54 object-cover rounded-lg"
      />
    </div>
  );
};

export default CarouselCard;
