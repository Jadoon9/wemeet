import React from "react";
import { Link } from "react-router-dom";

function UpdateSlot() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Update Rooms Slot</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/timeslot">Slots</Link>
                    </li>
                    <li className="breadcrumb-item active">Room Slots</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Example</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-date2">From Time.</label>
                            <input
                              name="from_time"
                              type="time"
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label for="input-date2">
                              Enter date for which you want to disable this time
                              slot.
                            </label>
                            <input
                              name="given_date"
                              type="date"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-date2">To Time.</label>
                            <input
                              name="to_time"
                              type="time"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateSlot;
