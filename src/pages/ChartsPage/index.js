import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Charts from "../../components/Charts";
import DataTable from "../../components/DataTabel/DataTable";
import MainPageLayout from "../../components/MainPageLayout";
import ResTable from "../../components/ResTable";
import Table from "../../components/Table";
import TransactionData from "../../components/Transactions";
import {
  barChartState,
  lineChartState,
  pieChartState,
  dashedChartState,
  areaChartState,
  mixedChartState,
} from "../../components/Charts/chartsData";

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
        <div className="row">
          <div class="col-lg-6">
            <Charts
              title="Bar Chart"
              options={barChartState.options}
              series={barChartState.series}
              type="bar"
            />
          </div>
          <div class="col-lg-6">
            <Charts
              title="Line Chart"
              options={lineChartState.options}
              series={lineChartState.series}
              type="line"
            />
          </div>
          <div class="col-lg-6">
            <Charts
              title="Pie Chart"
              options={pieChartState.options}
              series={pieChartState.series}
              type="pie"
            />
          </div>
          <div class="col-lg-6">
            <Charts
              title="Dashed Line Chart"
              options={dashedChartState.options}
              series={dashedChartState.series}
              type="line"
            />
          </div>
          <div class="col-lg-6">
            <Charts
              title="Area Chart"
              options={areaChartState.options}
              series={areaChartState.series}
              type="area"
            />
          </div>
          <div class="col-lg-6">
            <Charts
              title="Mixed Chart"
              options={mixedChartState.options}
              series={mixedChartState.series}
              type="line"
            />
          </div>
        </div>

        {/* <Table
          thead1="Booking Number"
          thead2="Name"
          thead3="Date"
          thead4="Items"
          thead5="Mobile Number"
          thead6="Action"
          dataDisplay={TransactionData}
        >
          {TransactionData?.map(
            ({ img, Id, Name, Price, Date, Quantity, Amount, Status }) => {
              return (
                <tr data-id="1">
                  <td data-field="id" style={{ width: 80 }}>
                    {Id}
                  </td>
                  <td data-field="name">{Name}</td>
                  <td data-field="age">{Price}</td>
                  <td data-field="gender">{Quantity}</td>
                  <td data-field="person-limit">{Quantity}</td>
                  <td style={{ width: 100 }}>
                    <Link to="createroom">
                      <i
                        style={{ color: "#EA7B5B" }}
                        className="fas fa-pencil-alt"
                      ></i>
                      <FaPencilAlt />
                    </Link>
                  </td>
                </tr>
              );
            }
          )}
        </Table> */}
      </MainPageLayout>
    </>
  );
}

export default ChartsPage;
