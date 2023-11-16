// CSS
import "./Card.css";

// React
import React, { memo, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Constants and Type
import { NOTIFY } from "../../../constants/Error";
import { VARIANT } from "../../../types/Variant";

// Component
import { Button, Heading, Input } from "..";

// Helper
import { getListCart } from "../../../helpers/DataLocalStorage";
import { calculatorTotalPrice } from "../../../helpers/CalculatorToltalPrice";

// Context
import { CartContext } from "../../../stores/contexts/CartContext";

type CustomCardProps = {
  showInput?: boolean;
  className?: string;
  titleCard: string;
  width?: number;
  titleButton?: string;
  variants?: VARIANT;
  onSubmit?: () => void;
};

const Card: React.FC<CustomCardProps> = memo(
  ({
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

    // Handles clicking Confirm Order
    const handleConfirmOrder = useCallback(() => {
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
    }, [navigate, onSubmit, titleButton]);

    const { carts } = useContext(CartContext);

    const totalPrice = useMemo(() => calculatorTotalPrice(carts), [carts]);

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
          children={titleButton}
          className="text-large font-family"
          onClick={handleConfirmOrder}
          variants={VARIANT.SECONDARY}
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
  }
);
export default Card;
