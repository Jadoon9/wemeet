import React from "react";
import { Link } from "react-router-dom";
import CouponTable from "../../components/CouponTable";

function Coupon() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 ">Manage Coupons</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li>
                        <Link
                          to="/coupon"
                          className="breadcrumb-item active"
                        >{`Coupons >`}</Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/createcoupon"
                          className="breadcrumb-item active"
                        >
                          Create Coupons{" "}
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
                    <h4 className="card-title">ALL Coupons</h4>

                    <CouponTable />
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

export default Coupon;
