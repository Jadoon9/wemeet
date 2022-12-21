import React from "react";
import { FaDrumSteelpan, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainPageLayout from "../../components/MainPageLayout";
import Table from "../../components/Table";
import TransactionData from "../../components/Transactions";

function Customers() {
  return (
    <>
      <MainPageLayout
        title="Manage Cutomers"
        breadcrum1="Customers"
        breadcrum2="Manage Customers"
        cardTitle="All Customers"
        link1="/customers"
        link2="/customers"
      >
        <Table
          thead1="Name"
          thead2="Email"
          thead3="Gender"
          thead4="Location"
          thead5="DOB"
          thead6="Company"
          thead7="Occopation"
          thead8="Action"
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
                  <td>
                    <Link to="#">
                      <FaPencilAlt style={{ color: "#EA7B5B" }} />
                    </Link>
                    {"  "}
                    <Link to="#">
                      <FaTrash style={{ color: "#EA7B5B" }} />
                    </Link>
                  </td>
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

export default Customers;
