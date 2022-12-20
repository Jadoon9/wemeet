import React from "react";
import { Link } from "react-router-dom";
import CouponTable from "../../components/CouponTable";
import MainPageLayout from "../../components/MainPageLayout";
import TimeSlotTable from "../../components/TimeSlotTable";
import TransactionData from "../../components/Transactions";

function Coupon() {
  return (
    <>
      <MainPageLayout
        title="Manage Coupons"
        breadcrum1={`Coupons >`}
        breadcrum2="Create Coupons"
        cardTitle="All Coupons"
        link1="/coupon"
        link2="/createcoupon"
      >
        <CouponTable />
      </MainPageLayout>

      {/* <div className="main-content">
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
      </div> */}
    </>
  );
}

export default Coupon;
