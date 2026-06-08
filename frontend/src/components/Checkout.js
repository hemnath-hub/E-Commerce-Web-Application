import React from "react";

function Checkout({ checkout }) {
  return (
    <div>
      <button onClick={checkout}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
