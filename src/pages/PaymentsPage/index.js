import React from "react";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";

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
      {/* <ReactHookForm /> */}
    </MainPageLayout>
  );
};

export default PaymentsPage;
