import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAsyncDebounce } from "react-table";

const GlobalSearchFilter = ({
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
        <Form.Group className="mb-3 ">
          <Form.Control
            className="font-size-11"
            size="lg"
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            value={value || ""}
            placeholder={`Search ${count} records...`}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default GlobalSearchFilter;
