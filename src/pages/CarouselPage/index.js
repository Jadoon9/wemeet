import React from "react";
import Carousel from "../../components/Carousel";
import MainPageLayout from "../../components/MainPageLayout";

const CarouselPage = () => {
  return (
    <>
      <MainPageLayout
        title="Editor"
        breadcrum1="Dashboard"
        breadcrum2="UI Elements"
        breadcrum3="Carousel"
        link1="/"
        link2="/ui-elements"
        link3="/editor"
      >
        <Carousel />
      </MainPageLayout>
    </>
  );
};

export default CarouselPage;
