import React from "react";
import Carousel from "../../components/Carousel";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import SwiperSlider from "../../components/Carousel/SwiperCarousel";

const CarouselPage = () => {
  return (
    <>
      <MainPageLayout
        title="Carousel"
        breadcrum1="Dashboard"
        breadcrum2="UI Elements"
        breadcrum3="Carousel"
        cardTitle="Carousel Page"
        link1="/"
        link2="/ui-elements"
        link3="/editor"
      >
        {/* <Carousel /> */}
        <SwiperSlider />
      </MainPageLayout>
    </>
  );
};

export default CarouselPage;
