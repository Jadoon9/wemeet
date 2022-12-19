import React from "react";

function Country(props) {
  return (
    <>
      <li className="dropdown-item notify-item">
        <img
          src={props.img}
          alt="user-image"
          className="me-1"
          style={{ height: "12px" }}
        />{" "}
        <span className="align-middle">{props.country}</span>
      </li>
    </>
  );
}

export default Country;
