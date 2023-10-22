// CSS
import "./card.css";

// Constants and Type
import { CustomCardProps, CustomProductProps } from "../../../types";
import { NOTIFY } from "../../../constant/error";

// Component
import { Button, Heading, Input } from "..";

// LocalStorage
import { getListCart } from "../../../helpers/data-localStorage";

// Component Card
const Card = ({
  className,
  titleCard,
  titleButton,
  showInput,
  width,
  variants,
  onSubmit,
  navigate,
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

  // Handles clicking Confim Order
  const handleConfirmOrder = () => {
    // Get current URL
    const currentUrl = window.location.href;
    const carts = getListCart().length;

    // If you are on the checkout page, call the method onSubmit
    if (carts > 0 && titleButton !== "apply") {
      navigate?.("/checkout");
    } else if (titleButton === "apply") {
      ("");
    } else {
      alert(NOTIFY.EMPTY);
      navigate?.("/menu");
    }

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
