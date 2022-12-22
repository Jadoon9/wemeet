import React from "react";

const CarouselItem = ({ image, alt }) => {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
};

export default CarouselItem;
