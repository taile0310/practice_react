// React
import { FC, ReactElement, memo } from "react";

// Component
import { DetailDish, Image, QuantitySelector } from "../..";

// Image
import { Remove } from "../../../assets/image";
import { TAction } from "../../../types";

type TCartItemProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  className?: string;
  listStyle?: string;
  handleRemoveFromCart: (id: string) => void;
  handleUpdateQuantity: (id: string, action: TAction) => void;
};

const CartItem: FC<TCartItemProps> = ({
  id,
  name,
  image,
  price,
  quantity,
  className,
  listStyle = "none",
  handleRemoveFromCart,
  handleUpdateQuantity,
}): ReactElement => {
  const style = {
    listStyle: `${listStyle}`,
  };
  return (
    <li className={className} style={style}>
      <div className="cart-item">
        <div className="img-circle">
          <Image className="img-circle" src={`${image}`} />
        </div>
        <div className="order-group">
          <DetailDish name={name} price={price} />
          <QuantitySelector
            id={id}
            quantity={quantity}
            handleUpdateQuantity={handleUpdateQuantity}
          />
          <div className="btn-transparent btn-remove">
            <Image
              src={Remove}
              className="icon-remove"
              onClick={() => handleRemoveFromCart(id)}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default memo(CartItem);
