import React, { useState } from "react";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import Alert from "../../components/Alerts";
import CardAlerts from "../../components/Alerts/CardAlerts";
import { Helmet } from "react-helmet";

const AlertsPage = () => {
  const [showAlert, setShowAlert] = useState(true);
  const alertCloseHandler = () => {
    setShowAlert(!showAlert);
  };
  return (
    <MainPageLayout
      breadcrum1="Dashboard"
      breadcrum2="UI Elements"
      breadcrum3="Alerts"
      cardTitle="Alerts Page"
      link1="/"
      link2="/ui-elements"
      link3="/alerts"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Alerts Components</title>
        <meta
          name="description"
          content="Different alerts from bootstrap that can be used "
        />
      </Helmet>
      <Alert
        alertColor="alert-info"
        onClick={alertCloseHandler}
        showAlert={showAlert}
        text="Well done! You successfully read this important
            alert message."
      />
      <Alert
        alertColor="alert-warning"
        onClick={alertCloseHandler}
        showAlert={showAlert}
        text="Well done! You successfully read this important
            alert message."
      />
      <Alert
        alertColor="alert-danger"
        onClick={alertCloseHandler}
        showAlert={showAlert}
        text="Well done! You successfully read this important
            alert message."
      />
      <Alert
        alertColor="alert-success"
        onClick={alertCloseHandler}
        showAlert={showAlert}
        text="Well done! You successfully read this important
            alert message."
      />

      <CardAlerts />
    </MainPageLayout>
  );
};

export default AlertsPage;
