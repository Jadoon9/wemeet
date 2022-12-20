import React from "react";
import { FaDrumSteelpan, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainPageLayout from "../../components/MainPageLayout";
import TransactionData from "../../components/Transactions";

function Customers() {
  return (
    <>
      <MainPageLayout
        title="Manage Cutomers"
        breadcrum1="Customers > "
        breadcrum2="Manage Customers"
        cardTitle="All Customers"
        link1="/customers"
        link2="/customers"
      >
        {/* <CouponTable /> */}
      </MainPageLayout>

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Manage Customers</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li>
                        <Link
                          to="/customers"
                          className="breadcrumb-item active"
                        >{`Customers > `}</Link>
                      </li>
                      <li>
                        <Link
                          to="/customers"
                          className="breadcrumb-item active"
                        >
                          Manage Customers
                        </Link>
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
                            <th>Gender</th>
                            <th>Location</th>
                            <th>DOB</th>
                            <th>Company</th>
                            <th>Occupation</th>
                            <th>Action</th>
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
                                  <td>
                                    <Link to="#">
                                      <FaPencilAlt
                                        style={{ color: "#EA7B5B" }}
                                      />
                                    </Link>
                                    {"  "}
                                    <Link to="#">
                                      <FaTrash style={{ color: "#EA7B5B" }} />
                                    </Link>
                                  </td>
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
      </div>
    </>
  );
}

export default Customers;
