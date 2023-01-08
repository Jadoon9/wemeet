import React from "react";
import Login from "../../components/Authentication/Login";
import { useDispatch } from "react-redux";
import { loginUser } from "../../components/Authentication/loginThunk";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    console.log(values, "userrrr");
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(data));
  };

  return <Login handleLogin={handleLogin} />;
};

export default LoginPage;
