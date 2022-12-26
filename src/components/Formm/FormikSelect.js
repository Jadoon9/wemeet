import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

/**
 * FormikField Component
 */
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <label className="col-md-2 col-form-label" htmlFor={name}>
              {label}
            </label>
            <select
              className="form-control"
              //   value="Artisanal kale"
              //   type={type}
              //   id={name}
              //   {...formikField.field}
              //   defaultChecked={formikField.field.value}
            >
              <option>Select</option>
              <option>Large select</option>
              <option>Small select</option>
            </select>
            <FormikErrorMessage name={name} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
