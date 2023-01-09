import PaypalCheckoutButton from "./PaypaCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Checkout = () => {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 17,
  };

  return (
    <div className="checkout">
      <h1>PayPal Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>

      <div className="paypal">
        <p className="checkout-title"> PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
          <PayPalScriptProvider
            options={{
              "client-id":
                "AYIe2UFjLaXe3XaxPCtODrNlSfUOxUT7jZ9SxBUKsKBIPvbo_gIDGOM5akXMvVmjvrcHP-Zda8SdC2lO",
              vault: true,
            }}
          >
            <PaypalCheckoutButton product={product} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
