import React, { useState } from "react";
import TableData from "../TableData";
// import tooltip from "react@syncfusion"
import Transactions from "./Transactions";
import { BsFillCircleFill } from "react-icons/bs";

function LatestTransaction() {
  return (
    <>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-centered table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col" style={{ width: 60 }}></th>
                <th scope="col" className="mb-1 font-size-15">
                  ID and Name
                </th>
                <th scope="col" className="mb-1 font-size-15">
                  Date
                </th>
                <th scope="col" className="mb-1 font-size-15">
                  Price
                </th>
                <th scope="col" className="mb-1 font-size-15">
                  Quantity
                </th>
                <th scope="col" className="mb-1 font-size-15">
                  Amount
                </th>
                <th scope="col" className="mb-1 font-size-15">
                  Status
                </th>
                <th scope="col" className="mb-1 font-size-15">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {" "}
              {Transactions.map(
                ({ img, Id, Name, Price, Date, Quantity, Amount, Status }) => (
                  <tr key={Id}>
                    <td>
                      <img
                        src={img}
                        alt="user"
                        className="avatar-xs rounded-circle"
                      />
                    </td>
                    <td>
                      <p className="mb-1 font-size-12">{`#${Id}`}</p>
                      <h5 className="font-size-15 mb-0">{Name}</h5>
                    </td>
                    <td className="mb-1 font-size-14">{Date}</td>

                    <td className="mb-1 font-size-14">{`$ ${Price}`}</td>
                    <td className="mb-1 font-size-14">{Quantity}</td>
                    <td className="mb-1 font-size-14">{`$ ${Amount}`}</td>
                    <td className="mb-1 font-size-14">
                      {" "}
                      {Status === "Confirm" ? (
                        <p>
                          <BsFillCircleFill className=" text-success me-1" />
                          {"  "}
                          {Status}
                        </p>
                      ) : (
                        <p>
                          <BsFillCircleFill className=" text-danger me-1" />
                          {"  "}
                          {Status}
                        </p>
                      )}
                      {/* <BsFillCircleFill className=" text-success me-1" /> */}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default LatestTransaction;
