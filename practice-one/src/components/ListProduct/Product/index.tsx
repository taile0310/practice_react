// React hooks
import { FC, ReactElement, memo } from "react";

// Component
import { Button, Image, Modal } from "../..";

// Stores and Type
import { CustomProductProps, TOGGLE, VARIANT } from "../../../types";
import { useCartStore, useToggle } from "../../../stores";

type TProductProps = {
  id: string;
  name: string;
  image: string;
  product: CustomProductProps;
  width?: number;
  handleRemoveProduct: (productId: string) => void;
};

const Product: FC<TProductProps> = memo(
  ({ id, image, name, product, width, handleRemoveProduct }): ReactElement => {
    const { isInCart, handleAddToCart, handleRemoveFromCart } = useCartStore();
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
