import React from "react";
import { Link } from "react-router-dom";

function ViewCustomer() {
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Manage </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Users</a>
                      </li>
                      <li className="breadcrumb-item active">
                        <Link to="users"> Create Users</Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">ALL Customers</h4>

                    <div className="table-responsive">
                      <table className="table table-editable table-nowrap align-middle table-edits">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>DOB</th>
                            <th>Company</th>
                            <th>Occupation</th>
                            <th>Edit</th>
                          </tr>

                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>UserName</th>
                            <th>UserType</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-id="1">
                            <td data-field="id" style="width: 80px"></td>
                            <td data-field="name"></td>
                            <td data-field="age"></td>
                            <td data-field="gender"></td>
                            <td data-field="gender"></td>
                            <td data-field="gender"></td>
                            <td style="width: 100px">
                              <a href="#">
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                            </td>
                          </tr>

                          <tr data-id="1">
                            <td data-field="id" style="width: 80px"></td>
                            <td data-field="name"></td>
                            <td data-field="gender"></td>
                            <td data-field="gender">Staff</td>
                            <td style="width: 100px">
                              <a href="#">
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCustomer;
