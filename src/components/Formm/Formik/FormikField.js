import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
/**
 * FormikField Component
 */
const FormikField = ({ name, type, label, selectedValue }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <Form.Group md="12" className="justify-content-center">
              <Form.Label className="font-size-13">{label}</Form.Label>
              <Form.Control
                className="font-size-13"
                id={name}
                type={type}
                name="firstName"
                {...formikField.field}
                // defaultChecked={formikField.field.value}
              />
            </Form.Group>

            <FormikErrorMessage name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
