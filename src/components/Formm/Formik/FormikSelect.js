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
                <option value="blue">Primary</option>
                <option value="red">Danger</option>
                <option value="green">Success</option>
                <option value="orange">Info</option>
                <option value="brown">Dark</option>
                <option value="yellow">Warning</option>
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
