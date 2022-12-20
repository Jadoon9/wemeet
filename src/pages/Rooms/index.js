import React from "react";
import { Link } from "react-router-dom";
import MainPageLayout from "../../components/MainPageLayout";
import RoomTable from "../../components/RoomTable";

function Rooms() {
  return (
    <>
      <MainPageLayout
        title="Meeting Rooms"
        breadcrum1={`Disable Whole Availabilty  >`}
        breadcrum2={"Rooms > "}
        breadcrum3="Create Rooms"
        cardTitle="All Rooms"
        link1="/available"
        link2="/rooms"
        link3="/createroom"
      >
        <RoomTable />
      </MainPageLayout>

      {/* <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Meeting Rooms</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li>
                        <Link
                          to="/available"
                          className="breadcrumb-item active"
                        >
                          {" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/rooms" className="breadcrumb-item active">
                          / Rooms
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="createroom"
                          className="breadcrumb-item active"
                        >
                          / Create Rooms{" "}
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
                    <h4 className="card-title">ALL Rooms</h4>
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

export default Rooms;
