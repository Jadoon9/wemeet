import React from "react";
import { Col, Form } from "react-bootstrap";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

/**
 * FormikField Component
 */
const FormikField = ({ name, label, selectedValue }) => {
  return (
    <Field as="select" name={name}>
      {(formikField) => {
        return (
          <>
            <Form.Group md="12" className="justify-content-center">
              <Form.Label className="font-size-13 justify-content-center">
                {label}
              </Form.Label>
              <Form.Select className="font-size-13" {...formikField.field}>
                <option disabled>-- Select --</option>
                <option value="danger">Danger</option>
                <option value="success">Success</option>
                <option value="primary">Primary</option>
                <option value="info">Info</option>
                <option value="dark">Dark</option>
                <option value="warning">Warning</option>
              </Form.Select>
            </Form.Group>
            <FormikErrorMessage name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
