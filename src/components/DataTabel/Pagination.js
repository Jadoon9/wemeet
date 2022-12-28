import React from "react";
import { Pagination } from "react-bootstrap";

const Paginationn = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}) => {
  return (
    <>
      <Pagination size="sm" className="justify-content-end">
        <Pagination.First>
          <button
            className="page-link"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>
        </Pagination.First>
        <Pagination.Prev>
          <button
            className="page-link"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>
        </Pagination.Prev>
        <Pagination.Next>
          <button
            className="page-link"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </button>
        </Pagination.Next>
        <Pagination.Last>
          <button
            className="page-link"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </Pagination.Last>
        <Pagination.Item>
          <li className="page-item">
            <span>
              Page
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
          </li>
        </Pagination.Item>
        <Pagination.Item>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </Pagination.Item>
      </Pagination>
    </>
  );
};

export default Paginationn;
