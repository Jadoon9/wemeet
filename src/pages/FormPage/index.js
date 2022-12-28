import React from "react";
import MainPageLayout from "../../components/MainPageLayout";
import Formm from "../../components/Formm";

const FormPage = () => {
  return (
    <MainPageLayout
      title="Formik Form With all fields"
      breadcrumb1="Dashboard"
      breadcrumb2="Form"
      cardTitle="Formik Forms"
      link1="/"
      link2="/form"
    >
      <Formm
        email="true"
        userName="true"
        eventname="true"
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
