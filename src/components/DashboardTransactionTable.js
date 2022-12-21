import React from "react";
import { RiSearchLine } from "react-icons/ri";
import LatestTransaction from "./LatestTransaction";

const DashboardTransactionTable = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4">Latest Transaction</h4>
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="search_booking form-control"
                  placeholder="Search..."
                  id="search_booking"
                  style={{ width: 300 }}
                />
                <span>
                  <RiSearchLine />
                </span>
              </div>
            </form>
            {/* <DataTable /> */}
            <LatestTransaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTransactionTable;
