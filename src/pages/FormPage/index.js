import React from "react";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import Formm from "../../components/Formm/Formik";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../../redux/store";
import ReactHookForm from "../../components/Formm/ReactHookForm/ReactHookForm";
import { Helmet } from "react-helmet";
import FormikContainer from "../../components/Formm/FormikReusable/FormikContainer";
import RegistrationForm from "../../components/Formm/ReactHookForm";

const FormPage = () => {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    dispatch(addFormData(e));
  };

  return (
    <MainPageLayout
      title="Formik Form With all fields"
      breadcrumb1="Dashboard"
      breadcrumb2="Form"
      cardTitle="Formik Forms"
      link1="/"
      link2="/form"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Forms</title>
        <meta name="description" content="Form component with Formik " />
      </Helmet>
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
      {/* <RegistrationForm /> */}
    </MainPageLayout>
  );
};

export default FormPage;
