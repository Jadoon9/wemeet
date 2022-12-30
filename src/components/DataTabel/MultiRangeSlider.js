import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./slider.css";
import ReactSlider from "react-slider";
import classnames from "classnames";

function MultiRangeSlider({
  minValue,
  maxValue,
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  // Creating the state variables
  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);

  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const onChange = () => {};

  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => {
      Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      <input
        type="range"
        min={minValue || 0}
        max={minValue || 1000}
        value={filterValue?.[0] || ""}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
          setFilter((old = []) => [
            minVal ? parseInt(minVal, 10) : undefined,
            old[1],
          ]);
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100,
        })}
      />
      <input
        type="range"
        min={minValue || 0}
        max={maxValue || 1000}
        value={filterValue?.[1] || ""}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
          setFilter((old = []) => [
            old[0],
            maxVal ? parseInt(maxVal, 10) : undefined,
          ]);
        }}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>

      {/* <ReactSlider
        className="customSlider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        defaultValue={[0, 100]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={0}
      /> */}
    </>
  );
}

export default MultiRangeSlider;