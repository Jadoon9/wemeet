import React from "react";

import MainPageLayout from "../../components/MainPageLayout";
import TimeSlotTable from "../../components/TimeSlotTable";
import TransactionData from "../../components/Transactions";

function TimeSlot() {
  return (
    <>
      <MainPageLayout
        title="Manage Time Slots"
        breadcrum1="Time Slots"
        breadcrum2="Disable Time Slot"
        cardTitle="Time Slots"
        link1="/available"
        link2="/rooms"
        link3="/createroom"
      >
        <TimeSlotTable transactionData={TransactionData} />
      </MainPageLayout>

      {/* <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Manage Time Slots</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/timeslot">Time Slots</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <Link to="/updateslot"> Disable Time Slots</Link>
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
                    <h4 className="card-title">Time Slots</h4>
                    <TimeSlotTable transactionData={TransactionData} />
                    <div className="table-responsive">
                      <table className="table table-editable table-nowrap align-middle table-edits">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Time</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TransactionData.map(({ Id, Date }) => {
                            return (
                              <tr data-id="1">
                                <td data-field="name">{Id}</td>
                                <td data-field="name">{Date}</td>
                                <td style={{ width: 100 }}>
                                  <Link to="/updateslot">
                                    <FaPencilAlt />
                                  </Link>
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

export default TimeSlot;
