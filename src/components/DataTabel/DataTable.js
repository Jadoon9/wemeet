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
import Button from "../UiElements/Button";
import { matchSorter } from "match-sorter";
import GlobalSearchFilter from "./GlobalSearchFilter";
import DefaultColumnFilter from "./DefaultColumnFilter";
import Checkboxes from "./Checkbox";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { tableHooks, fuzzyTextFilterFn } from "./Checkbox";

//* Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

const DataTable = ({ data, columns }) => {
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
    selectedFlatRows,
    visibleColumns,
    preGlobalFilteredRows,
    // state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      data,
      columns,
      defaultColumn,
      initialState: { pageIndex: 0 },
      filterTypes,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    tableHooks
    // //* For pushing checkbox for seletion
    // (hooks) => {
    //   hooks?.visibleColumns?.push((columns) => [...columns]);
    // }
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
      {/* react ttable with data and all the columns provided */}
      <Table striped hover responsive {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroup, i) => (
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
              <tr
                // className="align-items-center justify-content-center "
                {...headerGroup?.getHeaderGroupProps()}
              >
                {headerGroup?.headers?.map((column) => (
                  <th className=" text-center" {...column?.getHeaderProps()}>
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
          {page?.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                key={i}
                {...row?.getRowProps()}
                className=" align-items-center justify-content-center"
              >
                {row?.cells?.map((cell) => {
                  return (
                    <td
                      className="font-size-11 align-items-center"
                      {...cell?.getCellProps()}
                    >
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

export default React.memo(DataTable);
