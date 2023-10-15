import "./card.css";
import { CustomCardProps } from "../../../types/interface";
import Button from "../button/Button";
import Input from "../input/Input";

const Card = ({
  className,
  titleCard,
  titleButton,
  showInput,
}: CustomCardProps) => {
  const items = JSON.parse(localStorage.getItem("CartProducts") || "[]");
  const totalPrice = items.reduce(
    (accumulator: number, item: number): number => {
      const itemTotal = item.quantity * item.price;
      return accumulator + itemTotal;
    },
    0
  );

  const isPrimary =
    className == "card-primary"
      ? "btn-secondary text-large font-family btn-confirm"
      : "btn-secondary text-large font-family btn-apply";

  const handleConfirmOrder = () => {
    const checkoutUrl = `${window.location.origin}/checkout`;
    window.location.replace(checkoutUrl);
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
