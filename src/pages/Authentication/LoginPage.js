import React from "react";
import Login from "../../components/Authentication/Login";
import MainPageLayout from "../../components/MainPageLayout";

const LoginPage = () => {
  return (
    <MainPageLayout
      title="Login"
      breadcrum1="Authentication"
      breadcrum2="Login"
      link1="/"
      link2="/login"
    >
      <Login />
    </MainPageLayout>
  );
};

export default LoginPage;
