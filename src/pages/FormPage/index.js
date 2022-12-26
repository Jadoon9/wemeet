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
      <Formm
        email="true"
        password="true"
        rememberMe="true"
        search="true"
        text="true"
        url="true"
        telephone="true"
        number="true"
        date="true"
        dateandtime="true"
        month="true"
        week="true"
        time="true"
        color="true"
      />
    </MainPageLayout>
  );
};

export default FormPage;
