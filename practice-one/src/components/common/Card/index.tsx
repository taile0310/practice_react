// CSS
import "./Card.css";

// interface
import { CustomCardProps, CustomProductProps } from "../../../types/interface";

// Component
import { Button, Input } from "..";

// LocalStorage
import { getListCart } from "../../../helper/data-localStorage";
import { useNavigate } from "react-router-dom";
import Heading from "../Heading";

// Component Card
const Card = ({
  className,
  titleCard,
  titleButton,
  showInput,
  onSubmit,
  width,
}: CustomCardProps) => {
  const widthCard = {
    width: `${width}px`,
  };
  // Calculate total value
  const totalPrice = getListCart().reduce(
    (accumulator: number, item: CustomProductProps) => {
      console.log(item, "tets");
      const itemTotal = (item.quantity || 0) * (item.price || 0);
      return accumulator + itemTotal;
    },
    0
  );
  // Determine className based on whether it is "card-primary"
  const isPrimary =
    className == "card-primary"
      ? "btn-secondary text-large font-family btn-confirm"
      : "btn-secondary text-large font-family btn-apply";

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
      : alert("Your shopping cart is empty, cannot checkout.");

    // If you are on the checkout page, call the onSubmit function
    if (currentUrl.includes("checkout")) {
      onSubmit?.();
    }
  };

  return (
    <div className={className} style={widthCard}>
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
        className={isPrimary}
        onClick={handleConfirmOrder}
      />
    </div>
  );
};

export default Card;
