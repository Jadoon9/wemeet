import React from "react";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import Formm from "../../components/Formm";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../../redux/store";

const FormPage = () => {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    dispatch(addFormData(e));
  };
  console.log(formData, "formData");
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
        onSubmit={formSubmitHandler}
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
