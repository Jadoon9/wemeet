import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import MainPageLayout from "../../MainPageLayout/MainPageLayout";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MGiGfCya8SYcQOHV3OY3geWFc56dMSBNyHLmfHXyN9ANfua0uXwSJYA3giYb57qrXGbi3TnDx0T5KaJ0rQgsDWg00sWZSPJ36"
    );
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MGy8RCya8SYcQOHxJYRbPE2",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],

    mode: "subscription",
    // mode: "payment",
    successUrl: `${window.location.origin}/stripe-success`,
    cancelUrl: `${window.location.origin}/stripe-cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <MainPageLayout
      title="Payment Methods"
      breadcrumb1="Dashboard"
      breadcrumb2="/stripe"
      cardTitle="Stripe"
      link1="/"
      link2="/stripe"
    >
      <div className="checkout">
        <h1>Stripe Checkout</h1>
        <p className="checkout-title">Design+Code React Hooks Course</p>
        <p className="checkout-description">
          Learn how to build a website with React Hooks
        </p>
        <h1 className="checkout-price">$20</h1>

        <button
          className="checkout-button"
          onClick={redirectToCheckout}
          disabled={isLoading}
        >
          <div className="text-container">
            <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
          </div>
        </button>
      </div>
    </MainPageLayout>
  );
};

export default Checkout;
