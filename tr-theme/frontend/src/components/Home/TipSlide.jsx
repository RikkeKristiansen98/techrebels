import React from "react";

const TipSlide = ({ tip }) => {
  return (
    <div className="tip-slide">
      <img src={tip.imgUrl} alt={tip.title} />
      <p>{tip.title}</p>
    </div>
  );
};

export default TipSlide;
