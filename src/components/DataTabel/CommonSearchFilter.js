import React from "react";
import { Form } from "react-bootstrap";

const CommonSearchFilter = ({ type, value, count, onChange }) => {
  return (
    <Form className="">
      <Form.Control
        className="font-size-11"
        size="sm"
        type={type}
        onChange={(e) => {
          onChange(e || undefined);
        }}
        value={value}
        placeholder={`Search ${count} records...`}
      />
    </Form>
  );
};

export default CommonSearchFilter;
