import React from "react";
import TransactionData from "./Transactions";

function ResTable() {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-editable table-nowrap align-middle table-edits">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {TransactionData.map(({ Id, Name, Date }) => {
              return (
                <tr>
                  <td>
                    <p className="mb-1 font-size-12">{Id}</p>
                  </td>
                  <td>
                    <h5 className="font-size-15 mb-0">{Name}</h5>
                  </td>
                  <td> {Date}</td>

                  <td>
                    <a
                      href="#"
                      type="button"
                      //    data-bs-toggle="modal" className="dlt btn btn-outline-danger btn-sm"
                      //    role="button"
                    >
                      Cancel
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResTable;
