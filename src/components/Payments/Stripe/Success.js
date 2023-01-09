import MainPageLayout from "../../MainPageLayout/MainPageLayout";

const Success = () => {
  return (
    <MainPageLayout
      title="Payment Methods"
      breadcrumb1="Dashboard"
      breadcrumb2="/stripe"
      cardTitle="Stripe"
      link1="/"
      link2="/stripe"
    >
      <h1>Success</h1>
      <h2>Thank you for your purchase!</h2>
    </MainPageLayout>
  );
};

export default Success;
