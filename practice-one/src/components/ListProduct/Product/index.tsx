// React hooks
import { FC, ReactElement, memo, useCallback } from "react";
import { useShallow } from "zustand/react/shallow";
import useSWRMutation from "swr/mutation";

// Component
import { Button, Image, Confirm } from "../..";

// Stores, Contants and Type
import { CustomProductProps, TOGGLE, VARIANT } from "../../../types";
import { useCartStore } from "../../../stores";
import { Edit, TrashCan } from "../../../assets/image";
import { NOTIFY } from "../../../constants";
import { useAlertStore } from "../../../stores/useAlertStore";
import { useConfirmStore } from "../../../stores/useConfirmStores";

// Define props for Product
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
  // Use hooks to get functions
  const { isInCart } = useCartStore(
    useShallow((state) => ({ isInCart: state.isInCart }))
  );

  const { showAlert } = useAlertStore(
    useShallow((state) => ({ showAlert: state.showAlert }))
  );

  const {
    productId,
    isVisible,
    children,
    productInfo,
    showConfirm,
    hideConfirm,
  } = useConfirmStore(
    useShallow((state) => ({
      productId: state.productId,
      isVisible: state.isVisible,
      children: state.children,
      productInfo: state.productInfo,
      showConfirm: state.showConfirm,
      hideConfirm: state.hideConfirm,
    }))
  );

  const handleAddToCart = useCallback(() => {
    isInCart(productId)
      ? (onRemoveFromCart(productId), hideConfirm())
      : (onAddToCart(productInfo!), hideConfirm());
  }, [
    productId,
    productInfo,
    isInCart,
    onRemoveFromCart,
    onAddToCart,
    hideConfirm,
  ]);

  const handleToggleUpdateProduct = useCallback(() => {
    onToggleUpdateProduct(product);
  }, [onToggleUpdateProduct, product]);

  const { trigger } = useSWRMutation(productId, onRemoveProduct, {
    onSuccess: () => {
      hideConfirm();
      showAlert(NOTIFY.HANDLE_SUCCESS);
    },
    onError: (error) => {
      showAlert(error.message);
      hideConfirm();
    },
  });
  const notify = isInCart(id) ? NOTIFY.REMOVE_FROM_CART : NOTIFY.ADD_PRODUCT;
  return (
    <li className="menu-item font-family" style={widthProduct}>
      <Image
        className={`img-rectangle ${isInCart?.(id) && "added-to-cart"}`}
        src={`${image}`}
        alt={name}
        onClick={() => {
          showConfirm(id, notify, product);
          console.log("click:", id);
        }}
      />
      <span className="text-small">{name}</span>
      <div className="handle-btn">
        <Button
          className="btn text-small"
          typeText="uppercase"
          variants={VARIANT.PRIMARY}
          children={<Image className="icon-control" src={TrashCan} />}
          onClick={() => showConfirm(id, NOTIFY.REMOVE_PRODUCT, null)}
        />
        <Button
          className="btn text-small"
          typeText="uppercase"
          variants={VARIANT.PRIMARY}
          children={<Image className="icon-control" src={Edit} />}
          onClick={handleToggleUpdateProduct}
        />
      </div>
      {isVisible && (
        <Confirm
          children={children}
          onConfirm={() => {
            children === NOTIFY.REMOVE_PRODUCT ? trigger() : handleAddToCart();
          }}
          onCancel={hideConfirm}
        />
      )}
    </li>
  );
};
export default memo(Product);
