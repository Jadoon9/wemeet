import React from "react";
// Using an ES6 transpiler like Babel
import Slider from "react-rangeslider";

// To include the default styles
import "react-rangeslider/lib/index.css";

const RangeSelector = ({
  rangeValue,
  handleChangeStart,
  handleChange,
  handleChangeComplete,
}) => {
  return (
    <Slider
      min={0}
      max={100}
      value={rangeValue}
      onChangeStart={handleChangeStart}
      onChange={(e) => handleChange(e)}
      onChangeComplete={handleChangeComplete}
    />
  );
};

export default RangeSelector;
