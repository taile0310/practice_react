// React
import { FC, ReactElement, memo } from "react";

// Component
import { DetailDish, Image, QuantitySelector } from "../..";

// Store
import { useCartStore } from "../../../stores";

// Image
import { Remove } from "../../../assets/image";

type TCartItemProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  className?: string;
  listStyle?: string;
};

const CartItem: FC<TCartItemProps> = memo(
  ({
    id,
    name,
    image,
    price,
    quantity,
    className,
    listStyle = "none",
  }): ReactElement => {
    const { handleRemoveFromCart } = useCartStore();
    const style = {
      listStyle: `${listStyle}`,
    };
    return (
      <li className={className} key={id} style={style}>
        <div className="cart-item">
          <div className="img-circle">
            <Image className="img-circle" src={`${image}`} />
          </div>
          <div className="order-group">
            <DetailDish name={name} price={price} />
            <QuantitySelector id={id} quantity={quantity} />
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
  }
);

export default CartItem;
