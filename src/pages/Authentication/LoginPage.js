import React from "react";
import Login from "../../components/Authentication/Login";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";

const LoginPage = () => {
  return (
    <MainPageLayout
      title="Login"
      breadcrum1="Authentication"
      breadcrum2="Login"
      cardTitle="Login Page"
      link1="/"
      link2="/login"
    >
      <Login />
    </MainPageLayout>
  );
};

export default LoginPage;
