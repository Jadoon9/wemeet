import React from "react";
import { Helmet } from "react-helmet";
import MainPageLayout from "../../../components/MainPageLayout/MainPageLayout";
import PaypalCheckout from "../../../components/Payments/Paypal/PaypalCheckout";

const PaymentsPage = () => {
  return (
    <MainPageLayout title="Payment Methods" cardTitle="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Paypal Payments</title>
        <meta name="description" content="Paypal payments " />
      </Helmet>
      <PaypalCheckout />
    </MainPageLayout>
  );
};

export default PaymentsPage;
