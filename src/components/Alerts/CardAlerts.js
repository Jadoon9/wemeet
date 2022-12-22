import React from "react";

const CardAlerts = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="card alert border p-0 mb-0">
          <div className="card-header bg-soft-success">
            <div className="d-flex">
              <div className="flex-grow-1">
                <h5 className="font-size-16 text-success my-1">
                  Success Alert
                </h5>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="text-center">
              <div className="mb-4">
                <i className="mdi mdi-checkbox-marked-circle-outline display-4 text-success"></i>
              </div>
              <h4 className="alert-heading">Well done!</h4>
              <p className="mb-0">Placed your Order successfully</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAlerts;
