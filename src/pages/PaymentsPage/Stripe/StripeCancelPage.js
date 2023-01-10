import React from "react";
import { Helmet } from "react-helmet";
import MainPageLayout from "../../../components/MainPageLayout/MainPageLayout";
import StripeCancel from "../../../components/Payments/Stripe/StripeCancel";

const PaymentsPage = () => {
  return (
    <MainPageLayout
      title="Payment Methods"
      breadcrumb1="Dashboard"
      breadcrumb2="/stripe"
      cardTitle="Stripe"
      link1="/"
      link2="/stripe"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Stripe Cancel</title>
        <meta name="description" content="Stripe stripe payments " />
      </Helmet>
      <StripeCancel />
    </MainPageLayout>
  );
};

export default PaymentsPage;
