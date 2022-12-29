import React, { useMemo } from "react";
import MultiRangeSlider from "../RangeSelector/MultiSlider";

const RangeFilter = ({
  // column: { preFilteredRows, setFilter, id },
  setGlobalFilter,
}) => {
  // const [min, max] = useMemo(() => {
  //   let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
  //   let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
  //   preFilteredRows.forEach((row) => {
  //     min = Math.min(row.values[id], min);
  //     max = Math.max(row.values[id], max);
  //   });
  //   return [min, max];
  // }, [id, preFilteredRows]);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => {
          console.log(`min = ${min}, max = ${max}`);
          setGlobalFilter(min, max);
        }}
      />
    </div>
  );
};

export default RangeFilter;
