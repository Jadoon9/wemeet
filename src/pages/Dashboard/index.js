import React, { useRef, useState } from "react";
import Card from "../../components/Card";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";

// import MultiRangeSlider from "../../components/RangeSelector/MultiSlider";

import RangeSelector from "../../components/RangeSelector/RangeSelector.js";
import VideoInput from "../../components/VideoInput/VideoInput.js";
import VoiceInput from "../../components/VoiceInput/VoiceInput";
import VoiceRecord from "../../components/VoiceInput/VoiceRecorder.js";

function Dashboard() {
  // Single Range Slider ========
  const [rangeValue, setRangeValue] = useState(10);
  const handleChangeStart = () => {};

  const handleChange = (e) => {
    setRangeValue(e);
  };
  const handleChangeComplete = () => {};

  // Multi Range slider

  return (
    <div>
      <MainPageLayout
        title="Dashboard"
        breadcrum1="We Meet"
        breadcrum2="Dashboard"
        link1="/"
        link2="/"
      >
        <Card title="Range Selector">
          <RangeSelector
            rangeValue={rangeValue}
            handleChangeStart={handleChangeStart}
            handleChange={handleChange}
            handleChangeComplete={handleChangeComplete}
          />
          <p>{rangeValue}</p>
        </Card>
        <Card title="Voice Recorder">
          <VoiceRecord />
        </Card>
        <Card title="Audio Input">
          <VoiceInput />
        </Card>
        <Card title="Video Input">
          <VideoInput />
        </Card>
      </MainPageLayout>
    </div>
  );
}

export default Dashboard;
