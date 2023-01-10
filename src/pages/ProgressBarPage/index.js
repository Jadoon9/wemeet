import React from "react";
import CircularProgress from "../../components/ProgressBar/CircularProgress";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import LinearProgress from "../../components/ProgressBar/LinearProgress";
import Card from "../../components/Card";
import { Helmet } from "react-helmet";

const ProgressBar = () => {
  return (
    <MainPageLayout
      title="Meeting Rooms"
      breadcrum1="Dashboard"
      breadcrum2="Progress bar"
      cardTitle="Progress Percentage"
      link1="/"
      link2="/progress-bar"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Progress Bars</title>
        <meta
          name="description"
          content="Added progress bars of different types. Used bootstrap "
        />
      </Helmet>
      <Card title="Circular Progress">
        <CircularProgress
          value={80}
          text="80%"
          pathColor="danger"
          textColor="primary"
        />
      </Card>
      <Card title="Progress Bar">
        <LinearProgress label="Completed" percentage={70} variant="warning" />
        <LinearProgress label="Running" percentage={40} variant="info" />
        <LinearProgress label="Progress" percentage={100} variant="success" />
        <LinearProgress label="Completed" percentage={100} variant="danger" />
      </Card>

      {/* <ProgressBar /> */}
    </MainPageLayout>
  );
};

export default ProgressBar;
