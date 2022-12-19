import React from "react";
import TransactionData from "../../components/Transactions";

function IncomeReport() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Buttons example</h4>
                  <p className="card-title-desc">
                    The Buttons extension for DataTables provides a common set
                    of options, API methods and styling to display buttons on a
                    page that will interact with a DataTable. The core library
                    provides the based framework upon which plug-ins can built.
                  </p>
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
                  <table
                    table
                    id="datatable-buttons"
                    className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline "
                    style={{ borderSpacing: 0 }}
                    aria-describedby="datatable-buttons_info"
                  >
                    <thead>
                      <tr>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          User
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          Order ID
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          Date
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          Rooms
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          Amount
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          WAT
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          Status
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="datatable-buttons"
                          rowspan="1"
                          colspan="1"
                          style={{ width: 139 }}
                          aria-label="Rooms: activate to sort column ascending"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {TransactionData.map(
                        ({
                          Id,
                          Name,
                          Price,
                          Date,
                          Quantity,
                          Amount,
                          Status,
                        }) => {
                          return (
                            <tr>
                              <td>{Id}</td>
                              <td>{Name}</td>
                              <td>{Price}</td>
                              <td>{Date}</td>
                              <td>{Quantity}</td>
                              <td>{Amount}</td>
                              <td>{Status}</td>
                              <td>A</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeReport;
