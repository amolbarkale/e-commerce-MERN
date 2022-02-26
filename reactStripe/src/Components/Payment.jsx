import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const KEY =
  "pk_test_51KWnEPSBqBQVzHg2E3a27gttWv8j9ztB6yJTQU4pJUQgT0f4CLvfUgGgBT3oFoaWY8pm4wpiMQAmpfrOmLMbzV5y00H4X1zRpg";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeReq = async () => {
      console.log("makeReq:");
      try {
        const response = await axios.post(
          "http://localhost:5000/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log("response:", response);
        history.push("/success");
      } catch (err) {
        console.log("err:", err);
      }
    };
    stripeToken && makeReq();
  }, [stripeToken, history]);

  return (
    <div>
      <StripeCheckout
        name="e-shop"
        image="https://scalebranding.com/wp-content/uploads/2020/10/EShop.jpg"
        billingAddress
        shippingAddress
        description="your total is Rs. 520"
        amount={52000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            position: "relative",
            top: 250,
            left: 700,
            border: "none",
            width: "150px",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          <h1>Payment</h1>
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
