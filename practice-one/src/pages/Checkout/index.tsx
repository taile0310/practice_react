// React router
import { useNavigate } from "react-router-dom";
import React from "react";

// Component
import { FormCheckout } from "../../components";

// Component Checkout
const Checkout: React.FC = () => {
  const navigate = useNavigate();

  return <FormCheckout navigate={navigate} />;
};

export default Checkout;
