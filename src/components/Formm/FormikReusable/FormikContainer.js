import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialVaues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("Form Data", values);
  return (
    <Formik
      initialValues={initialVaues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            name="email"
            type="email"
            label="Email"
          />
          <submit type="submit">Submit</submit>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
