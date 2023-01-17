import React from "react";
import Login from "../../components/Authentication/Login";
import { useDispatch } from "react-redux";
import { loginUser } from "../../components/Authentication/loginThunk";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "";

  const handleLogin = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    const response = await dispatch(loginUser(data));
    if (response?.payload?.code === "ERR_BAD_REQUEST") {
      toast.error(response?.payload?.response?.data);
    } else {
      localStorage.setItem("user", JSON.stringify(response.payload));
      navigate("/");
      toast.success("Successfully Logged In");
    }
  };

  return <Login handleLogin={handleLogin} />;
};

export default LoginPage;
