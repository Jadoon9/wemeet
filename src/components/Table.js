import React from "react";

function Table({
  thead1,
  thead2,
  thead3,
  thead4,
  thead5,
  thead6,
  thead7,
  thead8,
  dataDisplay,
  children,
}) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-editable table-nowrap align-middle table-edits">
          <thead>
            <tr>
              {thead1 && <th>{thead1}</th>}
              {thead2 && <th>{thead2}</th>}
              {thead3 && <th>{thead3}</th>}
              {thead4 && <th>{thead4}</th>}
              {thead5 && <th>{thead5}</th>}
              {thead6 && <th>{thead6}</th>}
              {thead7 && <th>{thead7}</th>}
              {thead8 && <th>{thead8}</th>}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
