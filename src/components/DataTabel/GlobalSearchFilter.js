import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAsyncDebounce } from "react-table";

const SearchFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <>
      <Form className="justify-content-end">
        Search:
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            value={value || ""}
            placeholder={`${count} records...`}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchFilter;
