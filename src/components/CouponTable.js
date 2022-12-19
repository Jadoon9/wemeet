import React from "react";
import TransactionData from "./Transactions";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CouponTable(props) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-editable table-nowrap align-middle table-edits">
          <thead>
            <tr>
              <th>Code</th>
              <th>Amount</th>
              <th>Validity Amount</th>
              <th>Valid From</th>
              <th>Expiry Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {TransactionData.map(
              ({ img, Id, Name, Price, Date, Quantity, Amount, Status }) => {
                return (
                  <tr key={Id}>
                    <td style={{ width: 80 }}>{Id}</td>
                    <td>{Name}</td>
                    <td>{Amount}</td>
                    <td>{Date}</td>
                    <td>{Quantity}</td>
                    <td style={{ width: 100 }}>
                      <Link to="/createcoupon">
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

export default CouponTable;
