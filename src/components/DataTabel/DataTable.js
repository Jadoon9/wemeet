import React, { useEffect, useMemo, useRef } from "react";
import Pagination from "./Pagination";
import {
  usePagination,
  useSortBy,
  useTable,
  useRowSelect,
  useGlobalFilter,
  useExpanded,
} from "react-table";
import { Table } from "react-bootstrap";
import SearchFilter from "./SearchFilter";
import MultiRangeSlider from "../RangeSelector/MultiSlider";
import RangeFilter from "./RangeFilter";

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

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
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
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 1, autoResetGlobalFilter: true },
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks?.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
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
        <SearchFilter
          type="text"
          onChange={setGlobalFilter}
          value={globalFilter}
        />
        <div>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => {
              console.log(`min = ${min}, max = ${max}`);

              // setGlobalFilter(min, max);
            }}
          />
        </div>
      </div>

      {/* react ttable with data and all the columns provided */}
      <Table striped hover responsive {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroup) => (
            <tr {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column) => (
                <th {...column?.getHeaderProps(column?.getSortByToggleProps())}>
                  {column?.render("Header")}
                  <span>
                    {column?.isSorted
                      ? column?.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
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
