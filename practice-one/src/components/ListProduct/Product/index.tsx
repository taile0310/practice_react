// React hooks
import { memo, useContext } from "react";

// Image
import { Button, Image } from "../..";

// Stores and Type
import { CartContext } from "../../../stores/contexts/CartContext";
import { CustomProductProps } from "../../../types/Product";
import { VARIANT } from "../../../types/Variant";
import { useToggle } from "../../../stores/useToggle";
import { TOGGLE } from "../../../types/Toggle";
import Modal from "../../Modal";

type TProductProps = {
  id: string;
  name: string;
  image: string;
  product: CustomProductProps;
  width?: number;
  handleRemoveProduct: (productId: string) => void;
};

// Component Product
const Product = memo(
  ({ id, image, name, product, width, handleRemoveProduct }: TProductProps) => {
    const { isInCart, handleAddToCart, handleRemoveFromCart } =
      useContext(CartContext);
    const { toggle, handleToggle } = useToggle();
    const widthProduct = {
      width: `${width}px`,
    };

    return (
      <li className="menu-item font-family" key={id} style={widthProduct}>
        <Image
          className={`img-rectangle ${isInCart?.(id) ? "added-to-cart" : ""}`}
          src={`${image}`}
          alt={name}
          onClick={() => {
            isInCart?.(id)
              ? handleRemoveFromCart(id)
              : handleAddToCart(product);
          }}
        />
        <span className="text-small">{name}</span>
        <div className="handle-btn">
          <Button
            className="btn text-small"
            typeText="uppercase"
            variants={VARIANT.PRIMARY}
            children="Remove"
            onClick={() => handleRemoveProduct(id)}
          />
          <Button
            className="btn text-small"
            typeText="uppercase"
            variants={VARIANT.PRIMARY}
            children="Edit"
            onClick={() => {
              handleToggle(product);
            }}
          />
        </div>
        {toggle === TOGGLE.ON && <Modal />}
      </li>
    );
  }
);

export default Product;
