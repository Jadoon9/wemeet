import React from "react";
import MainPageLayout from "../../components/MainPageLayout";
import Table from "../../components/Table";
import TableButtons from "../../components/TableButtons";
import TransactionData from "../../components/Transactions";

function IncomeReport() {
  return (
    <>
      <MainPageLayout
        cardTitle="Buttons Example"
        description="The Buttons extension for DataTables provides a common set
                      of options, API methods and styling to display buttons on
                      a page that will interact with a DataTable. The core
                      library provides the based framework upon which plug-ins
                      can built."
        showButton="true"
      >
        <Table
          thead1="User"
          thead2="Order ID"
          thead3="Date"
          thead4="Rooms"
          thead5="Ammount"
          thead6="WAT"
          thead7="Status"
          thead8="Actions"
        >
          {TransactionData.map(
            ({ Id, Name, Price, Date, Quantity, Amount, Status }) => {
              return (
                <tr>
                  <td>{Id}</td>
                  <td>{Name}</td>
                  <td>{Price}</td>
                  <td>{Date}</td>
                  <td>{Quantity}</td>
                  <td>{Amount}</td>
                  <td>{Status}</td>
                  <td>A</td>
                </tr>
              );
            }
          )}
        </Table>
        {/* <CouponTable /> */}
      </MainPageLayout>
    </>
  );
}

export default IncomeReport;
