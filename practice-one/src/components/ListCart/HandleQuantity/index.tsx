import { memo, useContext } from "react";
import { Button } from "../..";
import { CartContext } from "../../../stores/contexts/CartContext";
import { VARIANT } from "../../../types/Variant";

type THandleQuantity = {
  id: string;
  quantity: number;
  width?: number;
};

// Component HandleQuantity
const HandleQuantity = memo(({ id, quantity, width }: THandleQuantity) => {
  const { handleUpdateQuantity } = useContext(CartContext);
  const widthHandleQuantity = {
    width: `${width}px`,
  };
  return (
    <div className="quantity-input" style={widthHandleQuantity}>
      <Button
        children="-"
        className={`text-price ${quantity <= 1 && "btn-disabled"}`}
        variants={VARIANT.TRANSPARENT}
        onClick={() => handleUpdateQuantity(id, "decrease")}
      />
      <span className="quantity text-price">{quantity}</span>
      <Button
        children="+"
        className="text-price"
        variants={VARIANT.TRANSPARENT}
        onClick={() => handleUpdateQuantity(id, "increase")}
      />
    </div>
  );
});

export default HandleQuantity;
