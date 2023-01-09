import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  const { product } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("Thank you for your purchase!");
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
      onClick={(data, actions) => {
        // Validate on button click, client or server side
        const hasAlreadyBoughtCourse = false;

        if (hasAlreadyBoughtCourse) {
          setError(
            "You already bought this course. Go to your account to view your list of courses."
          );

          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      // createOrder={(data, actions) => {
      //   return actions.order.create({
      //     purchase_units: [
      //       {
      //         description: product.description,
      //         amount: {
      //           value: product.price
      //         }
      //       }
      //     ]
      //   });
      // }}
      createSubscription={(data, actions) => {
        return actions.subscription.create({
          plan_id: "P-42C997937D3702800MOUU2SA",
        });
      }}
      //for one time payment uncomment the following
      // onApprove={async (data, actions) => {
      //   const order = await actions.order.capture();
      //   console.log("order", order);

      //   handleApprove(data.orderID);
      // }}

      onApprove={(data, actions) => {
        alert(data.subscriptionID);
        handleApprove(data.orderID);
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
