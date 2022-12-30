import React, { useEffect, useMemo, useRef, useState } from "react";
import Pagination from "./Pagination";
import {
  usePagination,
  useSortBy,
  useTable,
  useRowSelect,
  useGlobalFilter,
  useExpanded,
  useFilters,
  useAsyncDebounce,
} from "react-table";
import { Form, Table } from "react-bootstrap";
import SearchFilter from "./GlobalSearchFilter";
import MultiRangeSlider from "./MultiRangeSlider";
import RangeFilter from "./NameRangeColumnFilter";
import { matchSorter } from "match-sorter";
import GlobalSearchFilter from "./GlobalSearchFilter";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
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
  }
);

//* For Filteration =================================================
function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}
//* Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <Form className="">
      <Form.Control
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
}

const DataTable = ({ columns, data }) => {
  //* For Filteration =================================================
  const filterTypes = useMemo(
    () => ({
      //* Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      //* Or, override the default text filter to use
      //* "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    prepareRow,
    canPreviousPage,
    setGlobalFilter,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    preGlobalFilteredRows,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 1, autoResetGlobalFilter: true },
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    //* For pushing checkbox for seletion
    (hooks) => {
      hooks?.visibleColumns.push((columns) => [
        //* Let's make a column for selection
        {
          id: "selection",
          //* The header can use the table's getToggleAllRowsSelectedProps method
          //* to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          //* The cell can use the individual row's getToggleRowSelectedProps method
          //* to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <>
      <div className="d-flex justify-content-between  w-50 float-end">
        {/* Search input componet for global search */}
        {/* <SearchFilter
          type="text"
          onChange={setGlobalFilter}
          value={globalFilter}
        /> */}
        {/* <div>
          <MultiRangeSlider
            min={0}
            max={1000}
            // onChange={({ min, max }) => {
            //   console.log(`min = ${min}, max = ${max}`);
            // setFilter([min, max]);
            // setGlobalFilter([min, max]);
            // }}
          />
        </div> */}
      </div>

      {/* react ttable with data and all the columns provided */}
      <Table striped hover responsive {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroup) => (
            <>
              <tr>
                <th
                  colSpan={visibleColumns.length}
                  style={{
                    textAlign: "left",
                  }}
                >
                  <GlobalSearchFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </th>
              </tr>
              <tr {...headerGroup?.getHeaderGroupProps()}>
                {headerGroup?.headers?.map((column) => (
                  <th
                    {...column?.getHeaderProps(column?.getSortByToggleProps())}
                  >
                    {column?.render("Header")}

                    <div>
                      {column?.canFilter ? column?.render("Filter") : null}
                    </div>

                    {/* <span>
                      {column?.isSorted
                        ? column?.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span> */}
                  </th>
                ))}
              </tr>
            </>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row?.getRowProps()}>
                {row?.cells?.map((cell) => {
                  return (
                    <td {...cell?.getCellProps()}>{cell?.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Paginationn component */}
      <Pagination
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default DataTable;
