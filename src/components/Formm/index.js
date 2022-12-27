import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "./FormikField";
import FormikSelect from "../../components/Formm/FormikSelect";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/store";
import Button from "../UiElements/Button";

const regexpUrl =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const regexpTelepone =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
/**
 * LoginFormikComponents Component
 */

// remaining  = validation for datetime, date, time, week , month , color
const LoginFormikComponents = ({
  onSubmit,
  children,
  eventName,
  eventColor,
  userName,
  email,
  password,
  rememberMe,
  search,
  text,
  url,
  telephone,
  number,
  date,
  dateandtime,
  month,
  week,
  time,
  color,
}) => {
  const formData = useSelector((state) => state.form);

  const dispatch = useDispatch();

  const initialValues = {
    userName: "",
    eventName: "",
    eventcolor: "",
    email: "",
    password: "",
    rememberMe: false,
    search: "",
    text: "",
    url: "",
    telephone: "",
    number: "",
    date: "",
    dateandtime: "",
    month: "",
    week: "",
    time: "",
    color: "",
  };

  // const onSubmit = (values) => {
  //   console.log(values, "valuess");
  //   // dispatch(addData(values));
  // };

  const validationSchema = yup.object({
    ...(userName && {
      userName: yup.string().required("User Name field is required"),
    }),
    ...(eventName && {
      eventName: yup.string().required("Event Name field is required"),
    }),
    ...(eventColor && {
      eventColor: yup.string().required("Event Name field is required"),
    }),
    ...(email && {
      email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email field is required"),
    }),
    ...(password && {
      password: yup.string().required("Password field is required"),
    }),
    ...(search && {
      search: yup.string().required("Search field is required"),
    }),
    ...(text && {
      text: yup.string().required("Text field is required"),
    }),
    ...(date && {
      date: yup.date().required("Date field is required"),
    }),
    ...(number && {
      number: yup.number().required("Number field is required"),
    }),
    ...(url && {
      url: yup
        .string()
        .matches(regexpUrl, "Enter correct url!")
        .required("Please enter website"),
    }),
    ...(dateandtime && {
      dateandtime: yup.object().shape({
        value: yup.string(),
        label: yup.string(),
      }),
    }),
    ...(telephone && {
      telephone: yup.number().required("Please enter valid phone number"),
    }),
    ...(month && {
      month: yup.date().required("Please select valid month"),
    }),
    ...(month && {
      month: yup.date().required("Please select valid month"),
    }),
    ...(week && {
      week: yup.string().required("Please select valid Week"),
    }),
    ...(time && {
      time: yup.string().required("Please select Time"),
    }),
    ...(color && {
      color: yup.string().required("Please select color"),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values, "valuess");
        onSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className="justify-content-center">
            {children ? (
              <>{children}</>
            ) : (
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
                {/* <FormikField label="Color Picker" name="color" type="color" /> */}
                {/* <FormikSelect /> */}
                {/* <FormikField label="Select" name="color" type="color" /> */}
                {/* <FormikField
                label="Remember Me"
                name="rememberMe"
                type="checkbox"
              /> */}
                <Button type="submit" text="Submit" variant="primary" />
              </div>
            )}

            {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginFormikComponents;
