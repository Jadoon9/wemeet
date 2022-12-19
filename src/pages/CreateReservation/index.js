import React from "react";
import { Link } from "react-router-dom";

function CreateReservation() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Create Reservation</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/res" className="breadcrumb-item active">
                        Reservation
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Create Reservation
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Reservation</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-date1">User</label>
                            <select
                              name="user"
                              className="form-control input-mask"
                              required=""
                              id="id_user"
                            >
                              <option value="" selected="">
                                ---------
                              </option>

                              <option value="1">admin</option>

                              <option value="3">test</option>

                              <option value="10">test2</option>

                              <option value="11">test6</option>

                              <option value="12">test7</option>

                              <option value="13">test8</option>

                              <option value="14">test9</option>

                              <option value="15">test10</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label for="input-date2">Cart</label>
                            <input
                              type="text"
                              name="order_id"
                              maxlength="10"
                              className="form-control input-mask"
                              required=""
                              id="id_order_id"
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-datetime">Order Id</label>
                            <input
                              type="text"
                              name="order_id"
                              maxlength="10"
                              className="form-control input-mask"
                              required=""
                              id="id_order_id"
                            ></input>
                          </div>
                          <div className="form-group mb-0">
                            <label for="input-currency">Amount:</label>
                            <input
                              type="number"
                              name="amount_paid"
                              rows="1"
                              className="form-control"
                              id="id_amount_paid"
                            ></input>
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

export default CreateReservation;
