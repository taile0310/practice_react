// CSS
import "./card.css";

// interface
import { CustomCardProps, CustomProductProps } from "../../../types/interface";

// Component
import { Button, Input } from "..";

// LocalStorage
import { getListCart } from "../../../helper/data-localStorage";

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
  // Handles clicking Confim Order
  const handleConfirmOrder = () => {
    // Get current URL
    const currentUrl = window.location.href;
    /**
     * Construct the full path to the checkout page by combining the current URL root with the path "/checkout"
     * "window.location.origin" is a property of the window.location object, representing the URL origin
     */
    const checkoutUrl = `${window.location.origin}/checkout`;

    // If you are on the checkout page, call the onSubmit function
    if (currentUrl.includes("checkout")) {
      onSubmit?.();
    }
    // Conversely, if you are in the cart, you will check the length of the cart.
    // If it is larger, you will be able to checkout and vice versa
    if (currentUrl.includes("cart")) {
      const carts = getListCart().length;
      carts > 0
        ? window.location.replace(checkoutUrl)
        : alert("Your shopping cart is empty, cannot checkout.");
    }
  };

  return (
    <div className={className} style={widthCard}>
      <h4 className="text-h4">{titleCard}</h4>
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
