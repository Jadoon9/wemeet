import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalCheckout = () => {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 17,
  };

  return (
    <div className="d-flex align-items-center flex-column justify-content-center">
      <h4>PayPal Checkout</h4>
      <h5 className="">$19</h5>

      <div className="">
        <div className="">
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

export default PaypalCheckout;
