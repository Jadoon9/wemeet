import React from "react";

import results from "../../Data.js";

import TableData from "../../TableData";

import MainPageLayout from "../../components/MainPageLayout.js";
import DashboardChart from "../../components/DashboardChart.js";
import DashboardTransactionTable from "../../components/DashboardTransactionTable.js";
import DashboardCards from "../../components/DashboardCards.js";
import DataTable from "../../components/DataTable.js";

function Dashboard() {
  return (
    <div>
      <MainPageLayout
        title="Dashboard"
        breadcrum1="We Meet"
        breadcrum2="Dashboard"
        cardTitle="All Customers"
        link1="/"
        link2="/"
      >
        <DashboardCards tableData={TableData} />
        <DashboardChart results={results} />
        <DashboardTransactionTable />
        <DataTable />
        {/* <CouponTable /> */}
      </MainPageLayout>
      {/* <div className="main-content">
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
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
