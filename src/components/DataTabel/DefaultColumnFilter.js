import React from "react";
import { Form } from "react-bootstrap";

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <Form className="">
      <Form.Control
        className="font-size-11"
        size="sm"
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        value={filterValue || ""}
        placeholder={`Search ${count} records...`}
      />
    </Form>
    // <input
    //   value={filterValue || ""}
    //   onChange={(e) => {
    //     setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    //   }}
    //   placeholder={`Search ${count} records...`}
    // />
  );
};

export default DefaultColumnFilter;
