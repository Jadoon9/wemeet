import React from "react";
import {
  RiArrowRightUpLine,
  RiGroupLine,
  RiArrowRightDownLine,
  RiSearchLine,
} from "react-icons/ri";
// import ApexCharts from 'apexcharts';
import ReactApexChart from "react-apexcharts";
import results from "../../Data.js";
import LatestTransaction from "../../components/LatestTransaction";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import {} from "react-icons/ri";
import data from "../../TableData";
import TableData from "../../TableData";
import ProgressCards from "../../components/ProgressCards";

function Dashboard() {
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Dashboard</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">We Meet</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {TableData.progress.map((data) => {
                return (
                  <ProgressCards
                    key={data.title}
                    title={data.title}
                    value={data.value}
                    percentage={data.percentage}
                  />
                );
              })}

              <div className="col-xl-3 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex text-muted">
                      <div className="flex-shrink-0  me-3 align-self-center">
                        <div className="avatar-sm">
                          <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                            <RiGroupLine className="i" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <p className="mb-1 font-size-14">New Visitors</p>
                        <h5 className="mb-3 font-size-14">435</h5>
                        <p className="text-truncate mb-0 font-size-14">
                          <span className="text-success me-2">
                            0.01%
                            <RiArrowRightUpLine />
                          </span>
                          From previous
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <h5 className="card-title">Overview</h5>
                      </div>
                      <div className="flex-shrink-0">
                        <div>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm"
                          >
                            ALL
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-primary btn-sm"
                          >
                            1M
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm"
                          >
                            6M
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm active"
                          >
                            1Y
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        {/* id="mixed-chart" className="apex-charts" */}
                        <ReactApexChart
                          options={results.results.options}
                          series={results.results.series}
                          type="line"
                          height={350}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-body border-top">
                    <div className="text-muted text-center">
                      <div className="row">
                        <div className="col-4 border-end">
                          <div>
                            <p className="mb-2">
                              {/* <i className="mdi mdi-circle font-size-12 text-primary me-1"></i>{" "} */}
                              <BsFillCircleFill className="font-size-12 text-primary me-1" />
                              Expenses
                            </p>
                            <h5 className="font-size-16 mb-0">
                              $ 8,524{" "}
                              <span className="text-success font-size-12">
                                {/* <i className="mdi mdi-menu-up font-size-14 me-1"></i> */}
                                <MdArrowDropUp className="font-size-14 me-1" />
                                1.2 %
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 border-end">
                          <div>
                            <p className="mb-2">
                              <BsFillCircleFill className="font-size-12 text-light me-1" />
                              Maintenance
                            </p>
                            <h5 className="font-size-16 mb-0">
                              $ 8,524{" "}
                              <span className="text-success font-size-12">
                                <MdArrowDropUp className="font-size-14 me-1" />
                                2.0 %
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div>
                            <p className="mb-2">
                              <BsFillCircleFill className="font-size-12 text-danger me-1" />
                              Profit
                            </p>
                            <h5 className="font-size-16 mb-0">
                              $ 8,524{" "}
                              <span className="text-success font-size-12">
                                <MdArrowDropUp className="font-size-14 me-1" />
                                0.4 %
                              </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

                    <LatestTransaction />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
