// React hooks
import { FC, ReactElement, memo, useCallback } from "react";
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
  onRemoveProduct: (productId: string) => void;
  onAddToCart: (product: CustomProductProps) => void;
  onRemoveFromCart: (productId: string) => void;
  onToggleUpdateProduct: (product: CustomProductProps | null) => void;
};

const Product: FC<TProductProps> = ({
  id,
  image,
  name,
  product,
  width,
  onRemoveProduct,
  onAddToCart,
  onRemoveFromCart,
  onToggleUpdateProduct,
}): ReactElement => {
  const widthProduct = {
    width: `${width}px`,
  };
  const { isInCart } = useCartStore();

  const handleAddToCart = useCallback(() => {
    isInCart(id) ? onRemoveFromCart(id) : onAddToCart(product);
  }, [isInCart, onRemoveFromCart, onAddToCart, id, product]);

  const handleRemoveProduct = useCallback(() => {
    onRemoveProduct(id);
  }, [onRemoveProduct, id]);

  const handleToggleUpdateProduct = useCallback(() => {
    onToggleUpdateProduct(product);
  }, [onToggleUpdateProduct, product]);

  return (
    <li className="menu-item font-family" style={widthProduct}>
      <Image
        className={`img-rectangle ${isInCart?.(id) && "added-to-cart"}`}
        src={`${image}`}
        alt={name}
        onClick={handleAddToCart}
      />
      <span className="text-small">{name}</span>
      <div className="handle-btn">
        <Button
          className="btn text-small"
          typeText="uppercase"
          variants={VARIANT.PRIMARY}
          children={<Image className="icon-control" src={TrashCan} />}
          onClick={handleRemoveProduct}
        />
        <Button
          className="btn text-small"
          typeText="uppercase"
          variants={VARIANT.PRIMARY}
          children={<Image className="icon-control" src={Edit} />}
          onClick={handleToggleUpdateProduct}
        />
      </div>
    </li>
  );
};
export default memo(Product);
