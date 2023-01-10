import { Helmet } from "react-helmet";
import MainPageLayout from "../../MainPageLayout/MainPageLayout";

const Success = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Stripe Success</title>
        <meta name="description" content="Stripe success page" />
      </Helmet>
      <h1>Success</h1>
      <h2>Thank you for your purchase!</h2>
    </>
  );
};

export default Success;
