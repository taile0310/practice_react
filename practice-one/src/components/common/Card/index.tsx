// CSS
import "./card.css";

// React
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Constants and Type
import { NOTIFY } from "../../../constant/Errors";
import { TVariant } from "../../../types/Variant";

// Component
import { Button, Heading, Input } from "..";

// Helper
import { getListCart } from "../../../helpers/DataLocalStorage";
import { calculatorTotalPrice } from "../../../helpers/CalculatorToltalPrice";

// Context
import { CartContext } from "../../../context/CartContext";

type CustomCardProps = {
  showInput?: boolean;
  className: string;
  titleCard: string;
  width?: number;
  titleButton?: string;
  variants?: TVariant;
  onSubmit?: () => void;
};

// Component Card
const Card: React.FC<CustomCardProps> = ({
  className,
  titleCard,
  titleButton,
  showInput,
  width,
  variants = "primary",
  onSubmit,
}): React.ReactElement => {
  const widthCard = {
    width: `${width}px`,
  };
  const navigate = useNavigate();

  // Handles clicking Confim Order
  const handleConfirmOrder = () => {
    // Get current URL
    const currentUrl = window.location.href;
    const carts = getListCart().length;

    if (carts > 0 && titleButton !== "apply") {
      navigate?.("/checkout");
    } else if (titleButton !== "apply") {
      alert(NOTIFY.EMPTY);
      navigate?.("/menu");
    }
    // If you are on the checkout page, call the method onSubmit
    if (currentUrl.includes("checkout")) {
      onSubmit?.();
    }
  };
  const cartContext = useContext(CartContext);

  const { carts } = cartContext;
  const totalPrice = calculatorTotalPrice(carts);

  return (
    <div className={`${className} card-${variants}`} style={widthCard}>
      <Heading className="text-h3" element="h3">
        {titleCard}
      </Heading>
      {showInput ? (
        <Input placeholder="enter promo code" className="input" type="text" />
      ) : (
        <div className="detail-total">
          <span className="text-large">
            {titleCard == "Your Subtotal" ? "Subtotal" : "Total"}
          </span>
          <span className="text-large subtotal">${totalPrice}.00</span>
        </div>
      )}
      <Button
        textBtn={titleButton}
        className="text-large font-family"
        onClick={handleConfirmOrder}
        variants="secondary"
        size={
          titleButton === "confirm order"
            ? "md"
            : titleButton === "Checkout"
            ? "xl"
            : "xs"
        }
        typeText="capitalize"
      />
    </div>
  );
};

export default Card;
