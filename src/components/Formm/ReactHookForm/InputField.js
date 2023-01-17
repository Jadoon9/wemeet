import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({ label, name, type, register, errors }) => {
  console.log(errors, "errorr");
  return (
    <Form.Group md="12" className="justify-content-center">
      <Form.Label className="font-size-13">{label}</Form.Label>
      <Form.Control
        {...register(name)}
        className="font-size-13"
        id={name}
        type={type}
        name={name}
      />
      <p className="text-danger font-size-10">{errors?.[name]?.message}</p>
    </Form.Group>
  );
};

export default InputField;
