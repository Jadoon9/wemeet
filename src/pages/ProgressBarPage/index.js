import React from "react";
import CircularProgress from "../../components/ProgressBar/CircularProgress";
import MainPageLayout from "../../components/MainPageLayout";
import LinearProgress from "../../components/ProgressBar/LinearProgress";
const index = () => {
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
      <LinearProgress text="Completed" percentage={70} color="bg-warning" />
      <LinearProgress text="Completed" percentage={40} color="bg-danger" />
      <LinearProgress text="Completed" percentage={100} color="bg-success" />
      {/* <ProgressBar /> */}
    </MainPageLayout>
  );
};

export default index;
