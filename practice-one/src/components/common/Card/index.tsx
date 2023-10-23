// CSS
import "./card.css";

// Constants and Type
import { CustomCardProps } from "../../../types";
import { NOTIFY } from "../../../constant/error";

// Component
import { Button, Heading, Input } from "..";

// Helper
import { getListCart } from "../../../helpers/data-localStorage";
import { calculatorTotalPrice } from "../../../helpers/calculator-totalPrice";
import React from "react";

// Component Card
const Card: React.FC<CustomCardProps> = ({
  className,
  titleCard,
  titleButton,
  showInput,
  width,
  variants,
  onSubmit,
  navigate,
}) => {
  const widthCard = {
    width: `${width}px`,
  };

  // Handles clicking Confim Order
  const handleConfirmOrder = () => {
    // Get current URL
    const currentUrl = window.location.href;
    const carts = getListCart().length;

    if (carts > 0 && titleButton !== "apply") {
      navigate?.("/checkout");
    } else if (titleButton === "apply") {
      ("");
    } else {
      alert(NOTIFY.EMPTY);
      navigate?.("/menu");
    }
    // If you are on the checkout page, call the method onSubmit
    if (currentUrl.includes("checkout")) {
      onSubmit?.();
    }
  };

  return (
    <div className={`${className} card-${variants}`} style={widthCard}>
      <Heading className="text-h3" element="h3" content={titleCard} />
      {showInput ? (
        <Input placeholder="enter promo code" className="input" />
      ) : (
        <div className="detail-total">
          <span className="text-large">
            {titleCard == "Your Subtotal" ? "Subtotal" : "Total"}
          </span>
          <span className="text-large subtotal">
            ${calculatorTotalPrice?.()}.00
          </span>
        </div>
      )}
      <Button
        textBtn={titleButton}
        className="text-large font-family"
        onClick={handleConfirmOrder}
        variants="secondary"
        size={
          titleButton === "confirm order"
            ? "large"
            : titleButton === "Checkout"
            ? "x-huge"
            : "small"
        }
        typeText="capitalize"
      />
    </div>
  );
};

export default Card;
