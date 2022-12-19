import React from "react";
import { FaPenAlt, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import TransactionData from "./Transactions";

function RoomTable() {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-editable table-nowrap align-middle table-edits">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price Per Slot</th>
              <th>Room Type</th>
              <th>Availability</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {TransactionData.map(
              ({ img, Id, Name, Price, Date, Quantity, Amount, Status }) => {
                return (
                  <tr data-id="1">
                    <td data-field="id" style={{ width: 80 }}>
                      {Id}
                    </td>
                    <td data-field="name">{Name}</td>
                    <td data-field="age">{Price}</td>
                    <td data-field="gender">{Quantity}</td>
                    <td style={{ width: 100 }}>
                      <Link to="/available">
                        <i className="fas fa-pencil-alt"></i>
                        <FaPencilAlt />
                      </Link>
                    </td>
                    <td style={{ width: 100 }}>
                      <Link to="createroom">
                        <i className="fas fa-pencil-alt"></i>
                        <FaPencilAlt />
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoomTable;
