import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

const SelectField = ({ label, register, options, name }) => {
  console.log(name, "name");
  return (
    <Form.Group md="12" className="justify-content-center">
      <Form.Label className="font-size-13 justify-content-center">
        {label}
      </Form.Label>

      <Select
        {...register(name)}
        closeMenuOnSelect={false}
        name={name}
        // defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={options}
      />
    </Form.Group>
  );
};

export default SelectField;
