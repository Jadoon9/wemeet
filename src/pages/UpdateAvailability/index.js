import React from "react";
import { Link } from "react-router-dom";

function UpdateAvailability() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Update Availability</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">Availability</li>
                    <li className="breadcrumb-item active">Availability</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Update</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-date2">From Date.</label>
                            <input
                              type="date"
                              className="form-control"
                              name="from_date"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label for="input-date2">
                              Disable Availability
                            </label>
                            <input type="checkbox" name="check" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-date2">End Date.</label>
                            <input
                              type="date"
                              className="form-control"
                              name="to_date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary" id="bttn">
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

export default UpdateAvailability;
