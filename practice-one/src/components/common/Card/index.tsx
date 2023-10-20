// CSS
import "./Card.css";

// interface
import { CustomCardProps, CustomProductProps } from "../../../types";

// Component
import { Button, Input } from "..";

// LocalStorage
import { getListCart } from "../../../helpers/data-localStorage";
import { useNavigate } from "react-router-dom";
import Heading from "../Heading";
import { NOTIFY } from "../../../constant/error";

// Component Card
const Card = ({
  className,
  titleCard,
  titleButton,
  showInput,
  width,
  variants,
  onSubmit,
}: CustomCardProps) => {
  const widthCard = {
    width: `${width}px`,
  };
  // Calculate total value
  const totalPrice = getListCart().reduce(
    (accumulator: number, item: CustomProductProps) => {
      const itemTotal = (item.quantity || 0) * (item.price || 0);
      return accumulator + itemTotal;
    },
    0
  );
  const navigate = useNavigate();

  // Handles clicking Confim Order
  const handleConfirmOrder = () => {
    // Get current URL
    const currentUrl = window.location.href;
    const carts = getListCart().length;

    carts > 0 && titleButton !== "Apply"
      ? navigate("/checkout")
      : titleButton === "Apply"
      ? ""
      : alert(NOTIFY.EMPTY);
    navigate("/menu");
    // If you are on the checkout page, call the onSubmit function
    if (currentUrl.includes("checkout")) {
      onSubmit?.();
    }
  };

  return (
    <div className={`${className} card-${variants}`} style={widthCard}>
      <Heading className="text-h3" element="h3" content={titleCard} />
      {showInput ? (
        <Input placeholder="enter promo code" className="card-input" />
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
