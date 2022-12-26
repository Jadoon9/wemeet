import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

/**
 * FormikField Component
 */
const FormikField = ({ name, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <Form.Label>{label}</Form.Label>
            <Form.Select aria-label="Default select example">
              <option disabled>-- Select --</option>
              <option value="danger">Danger</option>
              <option value="success">Success</option>
              <option value="primary">Primary</option>
              <option value="info">Info</option>
              <option value="dark">Dark</option>
              <option value="warning">Warning</option>
            </Form.Select>

            {/* <select
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
            </select> */}
            <FormikErrorMessage name={name} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
