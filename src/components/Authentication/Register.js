import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Formm/Formik";
import FormikField from "../Formm/Formik/FormikField";
import Button from "../UiElements/Button";
import darkLogo from "../../imgs/logo-dark.png";
import lightLogo from "../../imgs/logo-light.png";

const Register = ({ handleRegisterSubmit }) => {
  return (
    <div className="bg-pattern">
      <div className="bg-overlay"></div>
      <div className="account-pages my-5 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12 col-md-8">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center">
                    <a href="{% url 'dashboard' %}" className="">
                      <img
                        src={darkLogo}
                        alt=""
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

                  <h4 className="font-size-18 text-muted text-center mt-2">
                    Free Register
                  </h4>
                  <p className="text-muted text-center mb-4">
                    Get your free Upzet account now.
                  </p>
                  {/* Use Form component pass items for validation and required fields as children */}
                  <Form
                    password="true"
                    userName="true"
                    email="true"
                    onSubmit={handleRegisterSubmit}
                  >
                    <FormikField
                      label="User Name"
                      name="userName"
                      type="text"
                    />

                    <FormikField label="Email" name="email" type="email" />
                    <FormikField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    <Button text="Register" type="submit" />
                  </Form>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-white">
                  Already have an account ?
                  <Link to="/login" className="fw-medium text-primary">
                    Login
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

export default Register;
