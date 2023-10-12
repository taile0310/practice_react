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
  const isPrimary = className
    ? "btn-secondary text-large font-family btn-confirm"
    : "btn-secondary text-large font-family btn-apply";
  return (
    <div className={className}>
      <h4 className="text-h4">{titleCard}</h4>
      {showInput ? (
        <Input placeholder="enter promo code" className="card-input" />
      ) : (
        <div className="detail-total">
          <span className="text-large">Subtotal</span>
          <span className="text-large subtotal">$50.00</span>
        </div>
      )}
      <Button textBtn={titleButton} className={isPrimary} />
    </div>
  );
};

export default Card;
