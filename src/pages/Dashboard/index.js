import React, { useRef, useState } from "react";
import Card from "../../components/Card";
import MainPageLayout from "../../components/MainPageLayout.js";
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
    console.log(e);
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
        {/* <DashboardCards tableData={TableData} /> */}

        {/* <Chart
          options={results.results.options}
          series={results.results.series}
          type="line"
        /> */}

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

        {/* <DashboardTransactionTable /> */}

        <>{/* <MultiSlider /> */}</>

        {/* <CouponTable /> */}
      </MainPageLayout>
      {/* <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Dashboard</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">We Meet</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
