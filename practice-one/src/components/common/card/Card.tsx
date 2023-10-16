// CSS
import "./card.css";

// interface
import { CustomCardProps } from "../../../types/interface";

// Component
import Button from "../button/Button";
import Input from "../input/Input";

// Component Card
const Card = ({
  className,
  titleCard,
  titleButton,
  showInput,
  onSubmit,
}: CustomCardProps) => {
  // Get data CartProduct from localStorage
  const items = JSON.parse(localStorage.getItem("CartProducts") || "[]");

  // Calculate total value
  const totalPrice = items.reduce(
    (accumulator: number, item: number): number => {
      const itemTotal = item.quantity * item.price;
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
      onSubmit();
    }
    // Conversely, if you are in the cart, you will check the length of the cart.
    // If it is larger, you will be able to checkout and vice versa
    else if (currentUrl.includes("cart")) {
      const carts = Array.isArray(items) ? items.length : 0;
      carts > 0
        ? window.location.replace(checkoutUrl)
        : alert("giỏ hàng đang trống không thể checkout");
    }
  };

  return (
    <div className={className}>
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
