import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

function Notifications(props) {
  return (
    <div className="d-flex">
      <div className="flex-shrink-0 me-3">
        <div className="avatar-xs">
          <span className="avatar-title bg-primary rounded-circle font-size-16">
            <RiShoppingCartLine />
          </span>
        </div>
      </div>
      <div className="flex-grow-1">
        <h6 className="mb-1">{props.title}</h6>
        <div className="font-size-12 text-muted">
          <p className="mb-1">{props.short_desc}</p>
          <p className="mb-0">
            <i className="mdi mdi-clock-outline"></i>
            {props.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
