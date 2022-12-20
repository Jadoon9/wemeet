import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainPageLayout from "../../components/MainPageLayout";
import TimeSlotTable from "../../components/TimeSlotTable";
import TransactionData from "../../components/Transactions";

function Wallet() {
  return (
    <>
      <MainPageLayout
        title="Wallets"
        breadcrum1="Wallets >"
        breadcrum2="Create Wallet"
        cardTitle="All Wallets"
        link1="/wallet"
        link2="/createwallet"
      >
        <TimeSlotTable transactionData={TransactionData} />
      </MainPageLayout>

      {/* <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Wallets</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link
                          to="/wallet"
                          className="breadcrumb-item "
                        >{`Wallets >  `}</Link>
                      </li>
                      <li>
                        <Link
                          className="breadcrumb-item active"
                          to="/createwallet"
                        >
                          {" "}
                          Create Wallet{" "}
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
                    <h4 className="card-title">ALL Wallets</h4>

                    <div className="table-responsive">
                      <table className="table table-editable table-nowrap align-middle table-edits">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Amount</th>
                            <th>Details</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TransactionData.map(({ Id, Name }) => {
                            return (
                              <tr data-id="1">
                                <td data-field="id" style={{ width: 80 }}>
                                  {Id}
                                </td>
                                <td data-field="name">{Name}</td>
                                <td data-field="age">OMR </td>
                                <td data-field="age">
                                  <a href="#"> Detail </a>
                                </td>
                                <td style={{ width: 100 }}>
                                  <a href="#">
                                    <FaPencilAlt />
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Wallet;
