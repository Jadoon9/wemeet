import React from "react";
import { RiArrowRightUpLine, RiGroupLine } from "react-icons/ri";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress({ value, text, pathColor, textColor }) {
  return (
    <>
      <div
        className="mb-4"
        style={{ width: 100, height: 100, marginRight: "1rem" }}
      >
        <CircularProgressbar
          styles={buildStyles({
            // rotation: 0.25,

            // strokeLinecap: "butt",

            // textSize: "16px",

            // pathTransitionDuration: 0.5,

            pathColor: pathColor,
            textColor: textColor,
            // trailColor: "#d6d6d6",
            // backgroundColor: "#3e98c7",
          })}
          value={value}
          text={text}
        />
      </div>
    </>
  );
}

export default CircularProgress;
