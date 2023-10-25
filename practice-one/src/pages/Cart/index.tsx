// React Hooks and Router
import React, { useContext } from "react";

// Component
import { ListCart } from "../../components";
import { CartContext } from "../../context/CartContext";

// Component Cart
const Cart: React.FC = (): React.ReactElement => {
  const { carts } = useContext(CartContext);
  return <ListCart carts={carts} />;
};

export default Cart;
