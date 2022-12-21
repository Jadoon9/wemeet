import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataTable from "../../components/DataTable";
import MainPageLayout from "../../components/MainPageLayout";
import ResTable from "../../components/ResTable";
import Table from "../../components/Table";
import TransactionData from "../../components/Transactions";

function Reservation() {
  return (
    <>
      <MainPageLayout
        title="Reservations"
        breadcrum1="Reservations"
        breadcrum2="Create Reservation"
        cardTitle="Reservations"
        link1="/res"
        link2="/createres"
      >
        {/* <DataTable /> */}
        <Table
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
        </Table>
      </MainPageLayout>

      {/* <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Reservations</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li>
                        <Link
                          to="/res"
                          className="breadcrumb-item active"
                        >{`Reservations > `}</Link>{" "}
                      </li>
                      <li>
                        <Link to="/createres" className="breadcrumb-item ">
                          Create Reservation
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Reservations</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div> */}
    </>
  );
}

export default Reservation;
