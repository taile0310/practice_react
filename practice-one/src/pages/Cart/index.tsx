// React Hooks and Router
import React from "react";
import { useNavigate } from "react-router-dom";

// Component
import { ListCart } from "../../components";

// Component Cart
const Cart: React.FC = () => {
  const navigate = useNavigate();

  return <ListCart navigate={navigate} />;
};

export default Cart;
