import React from "react";
import MainPageLayout from "../../components/MainPageLayout";
import TransactionData from "../../components/Transactions";

function UserReport() {
  return (
    <>
      <MainPageLayout cardTitle="Buttons Example" showButton="true">
        {/* <CouponTable /> */}
      </MainPageLayout>

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Buttons example</h4>

                    <table
                      id="datatable-buttons"
                      className="table table-striped table-bordered dt-responsive nowrap"
                      style={{ borderSpacing: 0 }}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Gender</th>
                          <th>Occupation</th>
                          <th>Location</th>
                          <th>Phone Number</th>
                          <th>Wallet</th>
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
    </>
  );
}

export default UserReport;
