// React hooks
import { FC, ReactElement, memo } from "react";
// Component
import { Button, Image, Modal } from "../..";
// Stores and Type
import { CustomProductProps, TOGGLE, VARIANT } from "../../../types";
import { useCartStore, useToggleStore } from "../../../stores";
import { Edit, TrashCan } from "../../../assets/image";
type TProductProps = {
  id: string;
  name: string;
  image: string;
  product: CustomProductProps;
  width?: number;
  handleRemoveProduct: (productId: string) => void;
  handleAddToCart: (product: CustomProductProps) => void;
  handleRemoveFromCart: (productId: string) => void;
};
const Product: FC<TProductProps> = memo(
  ({
    id,
    image,
    name,
    product,
    width,
    handleRemoveProduct,
    handleAddToCart,
    handleRemoveFromCart,
  }): ReactElement => {
    const { toggle, handleToggleUpdateProduct } = useToggleStore();
    const widthProduct = {
      width: `${width}px`,
    };
    const { isInCart } = useCartStore();
    return (
      <li className="menu-item font-family" key={id} style={widthProduct}>
        <Image
          className={`img-rectangle ${isInCart?.(id) && "added-to-cart"}`}
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
            children={<Image className="icon-control" src={TrashCan} />}
            onClick={() => handleRemoveProduct(id)}
          />
          <Button
            className="btn text-small"
            typeText="uppercase"
            variants={VARIANT.PRIMARY}
            children={<Image className="icon-control" src={Edit} />}
            onClick={() => {
              handleToggleUpdateProduct(product);
            }}
          />
        </div>
        {toggle === TOGGLE.ON && <Modal />}
      </li>
    );
  }
);
export default Product;
