import { useContext } from "react";
import { Image } from "../..";
import { CartContext } from "../../../context/CartContext";
import { CustomProductProps } from "../../../types";

type TProductProps = {
  id: string;
  name: string;
  image: string;
  product: CustomProductProps;
};
const Product = ({ id, image, name, product }: TProductProps) => {
  const { isInCart, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);
  return (
    <li className="menu-item" key={id}>
      <Image
        className={`img-rectangle ${isInCart(id) ? "added-to-cart" : ""}`}
        src={`${image}`}
        alt={name}
        onClick={() => {
          isInCart(id) ? handleRemoveFromCart(id) : handleAddToCart(product);
        }}
      />
      <span className="text-small">{name}</span>
    </li>
  );
};

export default Product;
