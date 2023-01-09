import MainPageLayout from "../../MainPageLayout/MainPageLayout";

const Cancel = () => {
  return (
    <div>
      <MainPageLayout
        title="Payment Methods"
        breadcrumb1="Dashboard"
        breadcrumb2="/stripe"
        cardTitle="Stripe"
        link1="/"
        link2="/stripe"
      >
        <h1>Cancel</h1>
        <h2>Your payment was canceled.</h2>
      </MainPageLayout>
    </div>
  );
};

export default Cancel;
