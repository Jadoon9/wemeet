import React, { useEffect, useState } from "react";
import Register from "../../components/Authentication/Register";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../components/Authentication/registerThunk";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleRegisterSubmit = (values) => {
    const data = {
      id: uuid(),
      username: values.username,
      email: values.email,
      password: values.password,
    };
    try {
      dispatch(registerUser(data));
    } catch (e) {
      console.log(e);
    }
  };

  return <Register handleRegisterSubmit={handleRegisterSubmit} />;
};

export default RegisterPage;
