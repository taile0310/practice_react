// React Hooks
import { useState } from "react";

// Component
import ListCart from "../list-cart/ListCart";
import Navbar from "../common/navbar/Navbar";

// Component Cart
const Cart = () => {
  // Get data CartProduct from localStorage
  const items = JSON.parse(localStorage.getItem("CartProducts") || "[]");

  const [cartLength, setCartLength] = useState(items.length);

  return (
    <div className="component-layout font-family">
      <Navbar cartLength={cartLength} />
      <ListCart setCartLength={setCartLength} />
    </div>
  );
};

export default Cart;
