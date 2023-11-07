import { memo, useContext } from "react";
import { CartContext } from "../../../stores/contexts/CartContext";
import { Remove } from "../../../assets/image";
import DetailDish from "../DetailDish";
import HandleQuantity from "../HandleQuantity";
import { Image } from "../..";

type TCartItemProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  className?: string;
  listStyle?: string;
};
const CartItem = memo(
  ({
    id,
    name,
    image,
    price,
    quantity,
    className,
    listStyle = "none",
  }: TCartItemProps) => {
    const { handleRemoveFromCart } = useContext(CartContext);
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
            <HandleQuantity id={id} quantity={quantity} />
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
