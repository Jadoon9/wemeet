import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Charts from "../../components/Charts";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";

import {
  barChartState,
  lineChartState,
  pieChartState,
  dashedChartState,
  areaChartState,
  mixedChartState,
} from "../../components/Charts/chartsData";
import { Helmet } from "react-helmet";

function ChartsPage() {
  return (
    <>
      <MainPageLayout
        title="Charts"
        breadcrum1="Dashboard"
        breadcrum2="Charts"
        cardTitle="Charts"
        link1="/"
        link2="/charts"
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard | Charts</title>
          <meta
            name="description"
            content="Added diffetrent charts that we can use"
          />
        </Helmet>
        <div className="row">
          <div className="col-lg-6">
            <Charts
              title="Bar Chart"
              options={barChartState.options}
              series={barChartState.series}
              type="bar"
            />
          </div>
          <div className="col-lg-6">
            <Charts
              title="Line Chart"
              options={lineChartState.options}
              series={lineChartState.series}
              type="line"
            />
          </div>
          <div className="col-lg-6">
            <Charts
              title="Pie Chart"
              options={pieChartState.options}
              series={pieChartState.series}
              type="pie"
            />
          </div>
          <div className="col-lg-6">
            <Charts
              title="Dashed Line Chart"
              options={dashedChartState.options}
              series={dashedChartState.series}
              type="line"
            />
          </div>
          <div className="col-lg-6">
            <Charts
              title="Area Chart"
              options={areaChartState.options}
              series={areaChartState.series}
              type="area"
            />
          </div>
          <div className="col-lg-6">
            <Charts
              title="Mixed Chart"
              options={mixedChartState.options}
              series={mixedChartState.series}
              type="line"
            />
          </div>
        </div>
      </MainPageLayout>
    </>
  );
}

export default ChartsPage;
