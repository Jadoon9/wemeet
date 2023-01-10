import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

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
    <div className="d-flex align-items-center flex-column justify-content-center">
      <h4>Stripe Checkout</h4>

      <h6 className="">Total Amount : $20</h6>

      <button
        className="btn btn-primary d-flex align-items-center justify-content-center w-25"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Buy"}
      </button>
    </div>
  );
};

export default Checkout;
