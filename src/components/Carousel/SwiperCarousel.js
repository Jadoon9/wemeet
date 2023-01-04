import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import CarouselItem from "./CarouselItem";

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselItem
            image={
              "https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098__480.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            image={
              "https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733__480.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            image={
              "https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733__480.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            image={
              "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616__480.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            image={
              "https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098__480.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            image={
              "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367__480.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
