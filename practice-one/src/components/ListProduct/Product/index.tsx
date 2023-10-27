// React hooks
import { useContext } from "react";

// Image
import { Image } from "../..";

// Context
import { CartContext } from "../../../contexts/CartContext";

// Type
import { CustomProductProps } from "../../../types/Product";

type TProductProps = {
  id: string;
  name: string;
  image: string;
  product: CustomProductProps;
  width?: number;
};

// Component Product
const Product = ({ id, image, name, product, width }: TProductProps) => {
  const { isInCart, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);
  const widthProduct = {
    width: `${width}px`,
  };

  return (
    <li className="menu-item font-family" key={id} style={widthProduct}>
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
