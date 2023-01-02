import ReactSlider from "react-slider";
import "./slider.css";

function MultiRangeSlider({
  min,
  max,
  // column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  console.log("hereeeee");
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderTrack={(props, state) => <div {...props} />} //custom track
      // onChange={([min, max]) => {
      //   console.log(min, max), "mmmiiinnnxxx";
      // }}
      // thumbClassName="customSlider-thumb"
      // trackClassName="tracker"
      // ariaLabel={["Lower thumb", "Upper thumb"]}
      // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      // pearling
      // minDistance={0}
    />
  );
}

export default MultiRangeSlider;
