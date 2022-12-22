import React from "react";

const NotificationItem = ({ image, name, message, time }) => {
  return (
    <div class="pe-3" data-simplebar style={{ maxHxeight: "287px" }}>
      <a href="#" className="text-body d-block">
        <div className="d-flex py-3">
          <div className="flex-shrink-0 me-3 align-self-center">
            <img className="rounded-circle avatar-xs" alt="" src={image} />
          </div>

          <div className="flex-grow-1 overflow-hidden">
            <h5 className="font-size-14 mb-1">{name}</h5>
            <p className="text-truncate mb-0">{message}</p>
          </div>
          <div className="flex-shrink-0 font-size-13">{time}</div>
        </div>
      </a>
    </div>
  );
};

export default NotificationItem;
