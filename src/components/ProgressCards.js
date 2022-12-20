import React from "react";
import { RiArrowRightUpLine, RiGroupLine } from "react-icons/ri";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCards(props) {
  return (
    <>
      <div className="col-xl-4 col-sm-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex text-muted">
              <div className="flex-shrink-0  me-3 align-self-center">
                <div style={{ width: 60, height: 60, marginRight: "1rem" }}>
                  <CircularProgressbar value={66} text={66} />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1 font-size-14">{props.title}</p>
                <h5 className="mb-3 font-size-14">{props.value}</h5>
                {/* <p className="text-truncate mb-0 font-size-14">
                  <span className="text-success me-2">
                    {`${props.percentage}%`}
                    <RiArrowRightUpLine />
                  </span>
                  From previous
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressCards;
