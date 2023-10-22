// Component
import { useNavigate } from "react-router-dom";
import { FormCheckout } from "../../components";

// Component Checkout
const Checkout = () => {
  const navigate = useNavigate();

  return <FormCheckout navigate={navigate} />;
};

export default Checkout;
