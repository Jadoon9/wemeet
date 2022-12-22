import React from "react";
import ReactApexChart from "react-apexcharts";

const LineWithDataTabels = ({ title, options, series, type }) => {
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type={type}
        // width="420"
      />
    </div>
  );
};

export default LineWithDataTabels;
