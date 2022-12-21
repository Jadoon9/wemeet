import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChart = ({ results }) => {
  return (
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
                  <button type="button" className="btn btn-soft-primary btn-sm">
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

          {/* <div className="card-body border-top">
                    <div className="text-muted text-center">
                      <div className="row">
                        <div className="col-4 border-end">
                          <div>
                            <p className="mb-2">
                              <i className="mdi mdi-circle font-size-12 text-primary me-1"></i>{" "}
                              <BsFillCircleFill className="font-size-12 text-primary me-1" />
                              Expenses
                            </p>
                            <h5 className="font-size-16 mb-0">
                              $ 8,524{" "}
                              <span className="text-success font-size-12">
                                <i className="mdi mdi-menu-up font-size-14 me-1"></i>
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
                  </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
