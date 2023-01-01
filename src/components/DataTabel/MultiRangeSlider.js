import ReactSlider from "react-slider";
import "./slider.css";

function MultiRangeSlider({
  min,
  max,
  // column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  return (
    <>
      <ReactSlider
        defaultValue={[min, max]}
        className="slider"
        min={0}
        max={500}
        minDistance={50}
        step={50}
        withTracks={true}
        pearling={true}
        renderThumb={(props) => {
          return <div {...props} className="thumb" />;
        }}
        renderTrak={(props) => {
          return <div {...props} className="track" />;
        }}
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
    </>
  );
}

export default MultiRangeSlider;
