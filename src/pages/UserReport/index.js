import React from "react";
import MainPageLayout from "../../components/MainPageLayout";
import Table from "../../components/Table";
import TransactionData from "../../components/Transactions";

function UserReport() {
  return (
    <>
      <MainPageLayout cardTitle="Buttons Example" showButton="true">
        {/* <CouponTable /> */}
        <Table
          thead1="Home"
          thead2="Gender"
          thead3="Occupation"
          thead4="Location"
          thead5="Phone Number"
          thead6="Wallet"
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
                </tr>
              );
            }
          )}
        </Table>
      </MainPageLayout>
    </>
  );
}

export default UserReport;
