import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";

const BreadCrumbsPage = () => {
  return (
    <MainPageLayout title="Editor">
      <BreadCrumbs
        breadcrumb1="Dashboard"
        breadcrumb2="UI Elements"
        breadcrumb3="Cards"
        breadcrumb4="Dashboard"
        breadcrumb5="UI Elements"
        breadcrumb6="Cards"
        cardTitle="Bread Crums"
        link1="#"
        link2="#"
        link3="#"
        link4="#"
        link5="#"
      />
    </MainPageLayout>
  );
};

export default BreadCrumbsPage;
