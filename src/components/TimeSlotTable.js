import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TimeSlotTable = ({ transactionData }) => {
  return (
    <div className="table-responsive">
      <table className="table table-editable table-nowrap align-middle table-edits">
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {transactionData?.map(({ Id, Date }) => {
            return (
              <tr data-id="1">
                <td data-field="name">{Id}</td>
                <td data-field="name">{Date}</td>
                <td style={{ width: 100 }}>
                  <Link to="/updateslot">
                    <FaPencilAlt />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TimeSlotTable;
