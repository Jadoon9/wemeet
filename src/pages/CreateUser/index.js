import React from "react";
import { Link } from "react-router-dom";
import MainPageLayout from "../../components/MainPageLayout";

function UserSection() {
  return (
    <>
      <MainPageLayout
        title="Create User"
        breadcrum1="User > "
        breadcrum2="Create"
        cardTitle="Create User"
        link1="/user"
        link2="/createuser"
      >
        {/* <CouponTable /> */}
      </MainPageLayout>
      <div>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Create User</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item ">{`User > `} </li>
                        <li className="breadcrumb active">Create </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Create User</h4>
                      <form>
                        {/* {% csrf_token %} */}
                        <div className="row">
                          <div className="col-lg-6">
                            <div>
                              <div className="mb-4">
                                <label for="input-date1">Name</label>
                                <input
                                  type="text"
                                  name="first_name"
                                  placeholder="First Name"
                                  className="form-control input-mask"
                                  required=""
                                  id="id_first_name"
                                />
                              </div>
                              <div className="mb-4">
                                <label for="input-date2">UserName</label>
                                <input
                                  type="text"
                                  name="username"
                                  placeholder="User Name"
                                  className="form-control input-mask"
                                  required=""
                                  autofocus=""
                                  id="id_username"
                                />{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div>
                              <div className="mb-4">
                                <label for="input-datetime">Email</label>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  className="form-control input-mask"
                                  required=""
                                  id="id_email"
                                />
                              </div>
                              <div className="form-group mb-0">
                                <label for="input-currency">Password:</label>
                                <input
                                  type="password"
                                  name="password1"
                                  placeholder="Password"
                                  className="form-control"
                                  rows="1"
                                  required=""
                                  id="id_password1"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div>
                              <div className="mb-4">
                                <label for="input-datetime">
                                  Confirm Password:
                                </label>
                                <input
                                  type="password"
                                  name="password2"
                                  placeholder="Password check"
                                  className="form-control input-mask"
                                  required=""
                                  id="id_password2"
                                />{" "}
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
      </div>
    </>
  );
}

export default UserSection;
