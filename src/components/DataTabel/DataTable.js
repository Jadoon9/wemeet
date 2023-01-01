import React, { useEffect, useMemo, useRef } from "react";
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
import { Table } from "react-bootstrap";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import FontAwesome from "react-icons";

import { matchSorter } from "match-sorter";
import GlobalSearchFilter from "./GlobalSearchFilter";
import DefaultColumnFilter from "./DefaultColumnFilter";
import MultiRangeSlider from "./MultiRangeSlider";

// * Checkboxesss
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
      hooks?.visibleColumns?.push((columns) => [
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
              <IndeterminateCheckbox {...row?.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <>
      {/* react ttable with data and all the columns provided */}
      <Table striped hover responsive {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroup) => (
            <>
              <tr>
                <th colSpan={visibleColumns.length}>
                  <GlobalSearchFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </th>
              </tr>
              <tr {...headerGroup?.getHeaderGroupProps()}>
                {headerGroup?.headers?.map((column) => (
                  <th {...column?.getHeaderProps()}>
                    <span
                      className="font-size-11"
                      {...column.getSortByToggleProps()}
                    >
                      {column?.render("Header")}
                      {column?.isSorted
                        ? column?.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                    <div>
                      {column?.canFilter ? column?.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            </>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page &&
            page?.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row?.getRowProps()}>
                  {row?.cells?.map((cell) => {
                    return (
                      <td className="font-size-11" {...cell?.getCellProps()}>
                        {cell?.render("Cell")}
                      </td>
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
