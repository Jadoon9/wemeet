import React from "react";

const TableButtons = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="dt-buttons btn-group flex-wrap">
          {" "}
          <button
            className="btn btn-secondary buttons-copy buttons-html5"
            tabindex="0"
            aria-controls="datatable-buttons"
            type="button"
          >
            <span>Copy</span>
          </button>{" "}
          <button
            className="btn btn-secondary buttons-excel buttons-html5"
            tabindex="0"
            aria-controls="datatable-buttons"
            type="button"
          >
            <span>Excel</span>
          </button>{" "}
          <button
            className="btn btn-secondary buttons-pdf buttons-html5"
            tabindex="0"
            aria-controls="datatable-buttons"
            type="button"
          >
            <span>PDF</span>
          </button>{" "}
          <div className="btn-group">
            <button
              className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis"
              tabindex="0"
              aria-controls="datatable-buttons"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Column visibility</span>
            </button>
          </div>{" "}
        </div>
      </div>
      {/* <div className="col-sm-12 col-md-6">
              <div id="datatable-buttons_filter" className="dataTables_filter">
                <label>
                  Search:
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    placeholder=""
                    aria-controls="datatable-buttons"
                  />
                </label>
              </div>
            </div> */}
    </div>
  );
};

export default TableButtons;
