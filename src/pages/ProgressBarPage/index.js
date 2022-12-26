import React from "react";
import CircularProgress from "../../components/ProgressBar/CircularProgress";
import MainPageLayout from "../../components/MainPageLayout";
import LinearProgress from "../../components/ProgressBar/LinearProgress";

const ProgressBar = () => {
  return (
    <MainPageLayout
      title="Meeting Rooms"
      breadcrum1="Dashboard"
      breadcrum2="Progress bar"
      cardTitle="All Rooms"
      link1="/"
      link2="/progress-bar"
    >
      <CircularProgress value={80} text="80%" />
      <LinearProgress label="Completed" percentage={70} variant="warning" />
      <LinearProgress label="Running" percentage={40} variant="info" />
      <LinearProgress label="Progress" percentage={100} variant="success" />
      <LinearProgress label="Completed" percentage={100} variant="danger" />
      {/* <ProgressBar /> */}
    </MainPageLayout>
  );
};

export default ProgressBar;
