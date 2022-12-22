import React from "react";
import ProgressCards from "../ProgressBar/CircularProgress";

const DashboardCards = ({ tableData }) => {
  return (
    <div className="row">
      {tableData.progress.map((data) => {
        return (
          <ProgressCards
            key={data?.title}
            title={data?.title}
            value={data?.value}
            percentage={data?.percentage}
          />
        );
      })}
    </div>
  );
};

export default DashboardCards;
