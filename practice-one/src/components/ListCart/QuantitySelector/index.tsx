// React
import { FC, ReactElement, memo } from "react";

// Component
import { Button } from "../..";

// Stores and Type
import { useCartStore } from "../../../stores";
import { VARIANT } from "../../../types";

type TQuantitySelector = {
  id: string;
  quantity: number;
  width?: number;
};

const QuantitySelector: FC<TQuantitySelector> = memo(
  ({ id, quantity, width }): ReactElement => {
    const { handleUpdateQuantity } = useCartStore();
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
  }
);

export default QuantitySelector;
