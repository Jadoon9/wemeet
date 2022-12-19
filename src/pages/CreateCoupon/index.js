import React from "react";
import { Link } from "react-router-dom";

function CreateCoupon() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Create Coupon</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/coupon" className="breadcrumb-item active">
                        Coupon
                      </Link>
                    </li>
                    <li className="breadcrumb-item active ">Create Coupon</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Create Coupon</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-date1">Code:</label>

                            <input
                              type="text"
                              name="coupon"
                              maxlength="50"
                              className="form-control input-mask"
                              required=""
                              id="id_coupon"
                            />
                          </div>
                          <div className="mb-4">
                            <label for="input-date2">Discount:</label>

                            <select
                              name="discount_type"
                              className="form-control input-mask"
                              id="id_discount_type"
                            >
                              <option value="" selected="">
                                ---------
                              </option>

                              <option value="Discount">Discount</option>

                              <option value="Percentage">Percentage</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-datetime">Minimun spent:</label>\{" "}
                            <input
                              type="number"
                              name="minimum_amount"
                              className="form-control input-mask"
                              id="id_minimum_amount"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label for="input-currency">Discount:</label>
                            <input
                              type="number"
                              name="percentage_or_amount"
                              className="form-control input-mask"
                              id="id_percentage_or_amount"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-datetime">Starting Date:</label>
                            <input
                              type="text"
                              name="valid_from"
                              value="2022-11-22"
                              className="form-control"
                              id="id_valid_from"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label for="input-currency">Users:</label>

                            <input
                              type="text"
                              name="valid_from"
                              value="2022-11-22"
                              className="form-control"
                              id="id_valid_from"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-datetime">Expiry date:</label>

                            <input
                              type="text"
                              name="valid_till"
                              className="form-control input-mask"
                              id="id_valid_till"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label for="input-currency">Room Type:</label>

                            <input
                              type="text"
                              name="valid_from"
                              value="2022-11-22"
                              className="form-control"
                              id="id_valid_from"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-datetime">Overall Usage:</label>

                            <input
                              type="number"
                              name="overall_usage"
                              className="form-control input-mask"
                              id="id_overall_usage"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label for="input-currency">Images:</label>

                            <input
                              type="file"
                              name="image"
                              className="form-control"
                              id="id_image"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-datetime">Introduction:</label>
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

export default CreateCoupon;
