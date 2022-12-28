import React, { useState, useRef } from "react";

const VoiceInput = () => {
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
        className=""
        style={{
          backgroundColor: "indigo",
          color: "white",
          padding: "0.5rem",
          borderRadius: "0.3rem",
          cursor: "pointer",
        }}
        for="actual-btn"
      >
        Choose Video File
      </label>
      <input
        id="actual-btn"
        ref={inputRef}
        type="file"
        onChange={(e) => handleFileChange(e)}
        accept=".mov,.mp4"
        hidden
      />

      {source && <video width="100%" height="100%" controls src={source} />}
    </div>
  );
};

export default VoiceInput;
