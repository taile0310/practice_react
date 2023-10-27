import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
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
};
const CartItem = ({ id, name, image, price, quantity }: TCartItemProps) => {
  const { handleRemoveFromCart } = useContext(CartContext);

  return (
    <li key={id}>
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
};

export default CartItem;
