// React hooks
import { FC, ReactElement, memo } from "react";
// Component
import { Button, Image } from "../..";
// Stores and Type
import { CustomProductProps, TOGGLE, VARIANT } from "../../../types";
import { useCartStore } from "../../../stores";
import { Edit, TrashCan } from "../../../assets/image";
type TProductProps = {
  id: string;
  name: string;
  image: string;
  product: CustomProductProps;
  width?: number;
  toggle?: TOGGLE;
  handleRemoveProduct: (productId: string) => void;
  handleAddToCart: (product: CustomProductProps) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleToggleUpdateProduct: (product: CustomProductProps | null) => void;
};
const Product: FC<TProductProps> = ({
  id,
  image,
  name,
  product,
  width,
  handleRemoveProduct,
  handleAddToCart,
  handleRemoveFromCart,
  handleToggleUpdateProduct,
}): ReactElement => {
  const widthProduct = {
    width: `${width}px`,
  };
  const { isInCart } = useCartStore();
  return (
    <li className="menu-item font-family" style={widthProduct}>
      <Image
        className={`img-rectangle ${isInCart?.(id) && "added-to-cart"}`}
        src={`${image}`}
        alt={name}
        onClick={() => {
          isInCart?.(id) ? handleRemoveFromCart(id) : handleAddToCart(product);
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
          onClick={() => handleToggleUpdateProduct(product)}
        />
      </div>
    </li>
  );
};
export default memo(Product);
