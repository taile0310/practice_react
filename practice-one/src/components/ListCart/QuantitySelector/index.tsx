// React
import { memo, useContext } from "react";

// Component
import { Button } from "../..";

// Stores and Type
import { CartContext } from "../../../stores/contexts/CartContext";
import { VARIANT } from "../../../types/Variant";

type TQuantitySelector = {
  id: string;
  quantity: number;
  width?: number;
};

const QuantitySelector = memo(({ id, quantity, width }: TQuantitySelector) => {
  const { handleUpdateQuantity } = useContext(CartContext);
  const widthQuantitySelector = {
    width: `${width}px`,
  };
  return (
    <div className="quantity-input" style={widthQuantitySelector}>
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

export default QuantitySelector;
