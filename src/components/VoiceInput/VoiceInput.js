import React, { useState, useRef } from "react";

const VideoInput = () => {
  const inputRef = useRef();
  const [source, setSource] = useState(null);

  const handleFileChange = (event) => {
    console.log(event, "event");
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="mt-4">
      <label
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "0.5rem",
          borderRadius: "0.3rem",
          cursor: "pointer",
        }}
        for="actual-button"
      >
        Choose Audio File
      </label>
      <input
        id="actual-button"
        ref={inputRef}
        type="file"
        onChange={(e) => handleFileChange(e)}
        accept=" audio/mp3,audio/*;capture=microphone"
        hidden
      />
      {/* {!source && <button onClick={handleChoose}>Choose</button>} */}
      {source && <audio width="100%" height="200" controls src={source} />}
      {/* <div>{source || "Nothing selectd"}</div> */}
    </div>
  );
};

export default VideoInput;
