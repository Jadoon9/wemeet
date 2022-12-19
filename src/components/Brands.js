import React from "react";

function Brands(props) {
  return (
    <>
      <div className="col">
        <a className="dropdown-icon-item" href="#">
          <img src={props.img} alt="Github" />
          <span>{props.name}</span>
        </a>
      </div>
    </>
  );
}

export default Brands;
