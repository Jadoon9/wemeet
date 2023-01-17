import { useMemo } from "react";
import { Form } from "react-bootstrap";
import CommonSearchFilter from "./CommonSearchFilter";
import SearchFilter from "./GlobalSearchFilter";

const NumberRangeColumnFilter = ({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) => {
  console.log(filterValue, "filterValue");
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  const minFilterChangeHandler = (e) => {
    const val = e.target.value;
    setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
  };

  const maxFilterChangeHandler = (e) => {
    const val = e.target.value;
    setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
  };

  return (
    <div className="d-flex font-size-11 align-items-center">
      <CommonSearchFilter
        type="number"
        onChange={minFilterChangeHandler}
        value={filterValue[0] || ""}
        count={min}
      />
      -
      <CommonSearchFilter
        type="number"
        onChange={maxFilterChangeHandler}
        value={filterValue[1] || ""}
        count={max}
      />
    </div>
  );
};

export default NumberRangeColumnFilter;
