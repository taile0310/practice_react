import "./card.css";
import {
  CustomCardProps,
  CustomCartProps,
  CustomProductProps,
} from "../../../types/interface";
import Button from "../button/Button";
import Input from "../input/Input";
import useLocalStorageState from "use-local-storage-state";

const Card = ({
  className,
  titleCard,
  titleButton,
  showInput,
}: CustomCardProps) => {
  const [cart] = useLocalStorageState<CustomCartProps>("CartProducts", {});

  const getProducts = () => Object.values(cart || {});
  const totalPrice = getProducts().reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const isPrimary =
    className == "card-primary"
      ? "btn-secondary text-large font-family btn-confirm"
      : "btn-secondary text-large font-family btn-apply";

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
      <Button textBtn={titleButton} className={isPrimary} />
    </div>
  );
};

export default Card;
