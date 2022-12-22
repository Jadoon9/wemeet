import React from "react";

const index = ({ text, percentage, value, color }) => {
  return (
    <div>
      {text && <p class="text-muted mb-2">{text}</p>}
      <div class="progress progress-sm animated-progess">
        <div
          class={`${color}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default index;
