import React, { useEffect, useState } from "react";
import Register from "../../components/Authentication/Register";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../components/Authentication/registerThunk";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.auth);

  const handleRegisterSubmit = async (values) => {
    const data = {
      id: uuid(),
      userName: values.userName,
      email: values.email,
      password: values.password,
    };
    try {
      const response = await dispatch(registerUser(data));
      if (response?.payload?.code === "ERR_BAD_REQUEST") {
        toast.error(response?.payload?.response?.data);
      } else {
        localStorage.setItem("user", JSON.stringify(response.payload));
        navigate("/");
        toast.success("Successfully Registered");
      }
    } catch (e) {
      console.log(e, "eventerror");
    }
  };

  return <Register handleRegisterSubmit={handleRegisterSubmit} />;
};

export default RegisterPage;
