import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBarr = ({ label, percentage, variant }) => {
  return (
    <div>
      <ProgressBar
        className="mb-4"
        now={percentage}
        label={percentage}
        variant={variant}
      />
    </div>
  );
};

export default ProgressBarr;
