import React, { useMemo } from "react";
import MultiRangeSlider from "../RangeSelector/MultiSlider";

const RangeFilter = ({
  column: { filterValue = [], preFilteredRows, setFilter, id },
  setGlobalFilter,
}) => {
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);
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
      <input
        value={filterValue[0] || ""}
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            val ? parseInt(val, 10) : undefined,
            old[1],
          ]);
        }}
      />
      to
      <input
        value={filterValue[1] || ""}
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            old[0],
            val ? parseInt(val, 10) : undefined,
          ]);
        }}
      />
    </div>
  );
};

export default RangeFilter;
