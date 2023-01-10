import React from "react";
import { Helmet } from "react-helmet";
import MainPageLayout from "../../../components/MainPageLayout/MainPageLayout";
import StripeCheckout from "../../../components/Payments/Stripe/StripeCheckout";

const PaymentsPage = () => {
  return (
    <MainPageLayout title="Payment Methods" cardTitle="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Stripe Payment</title>
        <meta name="description" content="Stripe checkout with payments " />
      </Helmet>
      <StripeCheckout />
    </MainPageLayout>
  );
};

export default PaymentsPage;
