import React from "react";
import { Link } from "react-router-dom";
import Form from "../Formm/Formik";
import FormikField from "../Formm/Formik/FormikField";
import Button from "../UiElements/Button";
import darkLogo from "../../imgs/logo-dark.png";
import lightLogo from "../../imgs/logo-light.png";
import { refreshToken } from "../../api";

const Login = ({ handleLogin }) => {
  return (
    <div className="bg-pattern">
      <div className="bg-overlay"></div>
      <div className="account-pages my-5 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-6 col-md-8">
              <div className="card">
                <div className="card-body p-4">
                  <div className="">
                    <div className="text-center">
                      <a href="{% url 'dashboard' %}" className="">
                        <img
                          src={darkLogo}
                          alt="logo"
                          height="24"
                          className="auth-logo logo-dark mx-auto"
                        />
                        <img
                          src={lightLogo}
                          alt=""
                          height="24"
                          className="auth-logo logo-light mx-auto"
                        />
                      </a>
                    </div>

                    <h4 className="font-size-18 text-muted mt-2 text-center">
                      Welcome Back !
                    </h4>
                    <p className="mb-5 text-center">
                      Sign in to continue to Upzet.
                    </p>
                    <Form password="true" email="true" onSubmit={handleLogin}>
                      <FormikField label="Email" name="email" type="email" />

                      <FormikField
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <Button text="Login" type="submit" />
                    </Form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className=" text-white">
                  Don't have an account ?
                  <Link to="/register" className="fw-medium text-primary">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
