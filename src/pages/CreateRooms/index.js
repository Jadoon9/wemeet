import React from "react";
import { Link } from "react-router-dom";
import MainPageLayout from "../../components/MainPageLayout";

function CreateRooms() {
  return (
    <>
      <MainPageLayout
        title="Create Rooms"
        breadcrum1="Rooms >"
        breadcrum2="Create Room"
        cardTitle="Example"
        link1="/coupon"
        link2="/createcoupon"
      >
        {/* <CouponTable /> */}
      </MainPageLayout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Create Rooms</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/rooms">Rooms</Link>
                      </li>
                      <li className="breadcrumb-item active">Create Room</li>
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
                    <form method="post">
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <div className="mb-4">
                              <label for="input-date1">Room Name</label>
                              <input
                                type="text"
                                name="room_name"
                                maxlength="50"
                                className="form-control input-mask"
                                required=""
                                id="id_room_name"
                              />
                            </div>
                            <div className="mb-4">
                              <label for="input-date2">Room Type</label>
                              <select
                                name="room_type"
                                className="form-control input-mask"
                                required=""
                                id="id_room_type"
                              >
                                <option value="" selected="">
                                  ---------
                                </option>

                                <option value="1">Smart Meeting room</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <div className="mb-4">
                              <label for="input-datetime">Price Per SLot</label>
                              <input
                                type="number"
                                name="price_per_hour"
                                className="form-control input-mask"
                                required=""
                                id="id_price_per_hour"
                              />
                            </div>
                            <div className="form-group mb-0">
                              <label for="input-currency">Introduction:</label>
                              <textarea
                                name="introduction"
                                cols="40"
                                rows="1"
                                className="form-control"
                                required=""
                                id="id_introduction"
                              ></textarea>
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
    </>
  );
}

export default CreateRooms;
