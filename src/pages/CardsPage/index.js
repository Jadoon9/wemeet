import React from "react";
import { Helmet } from "react-helmet";
import Card from "../../components/Card";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";

const CardsPage = () => {
  return (
    <MainPageLayout
      title="Editor"
      breadcrum1="Dashboard"
      breadcrum2="UI Elements"
      breadcrum3="Cards"
      link1="/"
      link2="/ui-elements"
      link3="/cards"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Cards</title>
        <meta name="description" content="Reusable card component " />
      </Helmet>
      <Card
        image="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"
        title="Card Title"
        description="Use CSS or inline styles to customize the styling - the default CSS is a good starting point, but you can override it as needed."
        footer1="Button 1"
        footer2="Button 2"
      />
    </MainPageLayout>
  );
};

export default CardsPage;
