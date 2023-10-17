// React Hooks
import { useState } from "react";

// Component
import ListCart from "../list-cart/ListCart";
import Navbar from "../common/navbar/Navbar";

// LocalStorage
import { getListCart } from "../../helper/data-localStorage";

// Component Cart
const Cart = () => {
  const [cartLength, setCartLength] = useState(getListCart().length);
  return (
    <div className="component-layout font-family">
      <Navbar cartLength={cartLength} />
      <ListCart setCartLength={setCartLength} />
    </div>
  );
};

export default Cart;
