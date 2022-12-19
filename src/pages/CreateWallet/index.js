import React from "react";
import { Link } from "react-router-dom";

function CreateWallet() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Create Wallet</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/wallet">Wallet</Link>
                    </li>
                    <li className="breadcrumb-item active">Create Wallet</li>
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
                            <label for="input-date2">Amount</label>
                            <input
                              type="number"
                              name="current_amount"
                              value="0"
                              className="form-control input-mask"
                              id="id_current_amount"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <div className="mb-4">
                            <label for="input-datetime">Expiry Date</label>
                            <input
                              type="text"
                              name="valid_till"
                              className="form-control input-mask"
                              id="id_valid_till"
                            />
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

export default CreateWallet;
