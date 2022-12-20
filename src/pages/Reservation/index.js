import React from "react";
import { Link } from "react-router-dom";
import MainPageLayout from "../../components/MainPageLayout";
import ResTable from "../../components/ResTable";

function Reservation() {
  return (
    <>
      <MainPageLayout
        title="Reservations"
        breadcrum1={`Reservations >`}
        breadcrum2="Create Reservation"
        cardTitle="Reservations"
        link1="/res"
        link2="/createres"
      >
        <ResTable />
      </MainPageLayout>

      {/* <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Reservations</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li>
                        <Link
                          to="/res"
                          className="breadcrumb-item active"
                        >{`Reservations > `}</Link>{" "}
                      </li>
                      <li>
                        <Link to="/createres" className="breadcrumb-item ">
                          Create Reservation
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
                    <h4 className="card-title">Reservations</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div> */}
    </>
  );
}

export default Reservation;
