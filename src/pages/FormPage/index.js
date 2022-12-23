import React from "react";
import MainPageLayout from "../../components/MainPageLayout";
import Formm from "../../components/Formm";
const FormPage = () => {
  return (
    <MainPageLayout
      title="Formik Forms"
      breadcrumb1="Dashboard"
      breadcrumb2="Form"
      cardTitle="Formik Forms"
      link1="/"
      link2="/form"
    >
      <Formm />
    </MainPageLayout>
  );
};

export default FormPage;
