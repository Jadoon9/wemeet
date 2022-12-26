import React from "react";
import Register from "../../components/Authentication/Register";
import MainPageLayout from "../../components/MainPageLayout";

const RegisterPage = () => {
  return (
    <MainPageLayout
      title="Register"
      breadcrum1="Authentication"
      breadcrum2="Register"
      link1="/"
      link2="/register"
    >
      <Register />
    </MainPageLayout>
  );
};

export default RegisterPage;
