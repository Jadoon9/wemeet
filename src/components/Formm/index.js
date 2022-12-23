import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "./FormikField";

const regexpUrl =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const regexpTelepone =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
/**
 * LoginFormikComponents Component
 */

// remaining  = validation for datetime, date, time, week , month , color
const LoginFormikComponents = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
    search: "",
    text: "",
    url: "",
    telephone: "",
    number: 0,
    date: "2022-12-23",
    dateandtime: "2019-08-19T13:45:00",
    month: "2022-12",
    week: "2019-W33",
    time: "13:00:00",
    color: "#0bb197",
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    search: yup.string().required("Search field is required"),
    text: yup.string().required("Text field is required"),
    date: yup.date().required("Date field is required"),
    url: yup
      .string()
      .matches(regexpUrl, "Enter correct url!")
      .required("Please enter website"),
    // dateandtime: yup.object().shape({
    //   value: yup.string(),
    //   label: yup.string(),
    // }),
    tel: yup.number().required("Please enter valid phone number"),
    month: yup.date().required("Please select valid month"),
    week: yup.string().required("Please select valid Week"),
    time: yup.string().required("Please select Time"),
    color: yup.string().required("Please select color"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div>
              <FormikField label="Email" name="email" type="email" />
              <FormikField label="Password" name="password" type="password" />
              <FormikField label="Search" name="search" type="search" />
              <FormikField label="Text" name="text" type="text" />
              <FormikField label="Url" name="url" type="url" />
              <FormikField label="Telephone" name="telephone" type="tel" />
              <FormikField label="Number" name="number" type="number" />
              <FormikField label="Date" name="date" type="date" />
              <FormikField
                label="Date and Time"
                name="dateandtime"
                type="datetime-local"
              />
              <FormikField label="Month" name="month" type="month" />
              <FormikField label="Week" name="week" type="week" />
              <FormikField label="Time" name="time" type="time" />
              <FormikField label="Color Picker" name="color" type="color" />
              {/* <FormikField label="Select" name="color" type="color" /> */}
              {/* <FormikField
                label="Remember Me"
                name="rememberMe"
                type="checkbox"
              /> */}
              <button style={{ display: "block", marginTop: "1rem" }}>
                Submit
              </button>
            </div>
            {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginFormikComponents;
