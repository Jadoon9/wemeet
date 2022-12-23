import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <Slider {...settings}>
      <CarouselItem
        image={
          "https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098__480.jpg"
        }
      />
      <CarouselItem
        image={
          "https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733__480.jpg"
        }
      />
      <CarouselItem
        image={
          "https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733__480.jpg"
        }
      />
      <CarouselItem
        image={
          "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616__480.jpg"
        }
      />
      <CarouselItem
        image={
          "https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098__480.jpg"
        }
      />
      <CarouselItem
        image={
          "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367__480.jpg"
        }
      />

      <div>
        <img
          src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367__480.jpg"
          alt="sc1"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
