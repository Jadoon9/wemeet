import React from "react";
import { Form } from "react-bootstrap";

const SearchFilter = ({ type, value, onChange }) => {
  return (
    <>
      <Form className="justify-content-end">
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => {
              onChange(e.target.value);
            }}
            type={type}
            value={value || ""}
            placeholder="Search..."
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchFilter;
