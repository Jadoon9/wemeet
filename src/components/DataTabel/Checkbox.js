import React, { useEffect } from "react";
import { useRef } from "react";
import { matchSorter } from "match-sorter";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

// * Checkboxesss
const Checkboxes = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

export default Checkboxes;

// * Table Hooks
export const tableHooks = (hooks) => {
  // * Checkbox at the begining
  hooks.visibleColumns.push((columns) => [
    //* Let's make a column for selection
    {
      id: "selection",
      //* The header can use the table's getToggleAllRowsSelectedProps method
      //* to render a checkbox
      Header: ({ getToggleAllPageRowsSelectedProps }) => (
        <div>
          <Checkboxes {...getToggleAllPageRowsSelectedProps()} />
        </div>
      ),
      //* The cell can use the individual row's getToggleRowSelectedProps method
      //* to the render a checkbox
      Cell: ({ row }) => (
        <div>
          <Checkboxes {...row?.getToggleRowSelectedProps()} />
        </div>
      ),
    },
    ...columns,
  ]);
};

//* For Filteration =================================================
export const fuzzyTextFilterFn = (rows, id, filterValue) => {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
};
