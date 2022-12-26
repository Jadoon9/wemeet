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
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik01"
              className="justify-content-center"
            >
              <Form.Label>{label}</Form.Label>
              <Form.Control
                id={name}
                type={type}
                name="firstName"
                {...formikField.field}
                defaultChecked={formikField.field.value}
              />
            </Form.Group>

            {/* <label className="col-md-2 col-form-label" htmlFor={name}>
              {label}
            </label>
            <input
              className="form-control"
              value="Artisanal kale"
              type={type}
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            /> */}
            <FormikErrorMessage name={name} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
