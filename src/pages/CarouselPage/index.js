import React from "react";
import Carousel from "../../components/Carousel";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import SwiperSlider from "../../components/Carousel/SwiperCarousel";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard | Carousel</title>
          <meta
            name="description"
            content="Carousels with swiper implemented "
          />
        </Helmet>
        {/* <Carousel /> */}
        <SwiperSlider />
      </MainPageLayout>
    </>
  );
};

export default CarouselPage;
