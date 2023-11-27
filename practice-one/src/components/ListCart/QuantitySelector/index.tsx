// React
import { FC, ReactElement, memo, useCallback } from "react";

// Component
import { Button } from "../..";

// Stores and Type
import { TAction, VARIANT } from "../../../types";

type TQuantitySelector = {
  id: string;
  quantity: number;
  width?: number;
  onUpdateQuantity: (id: string, action: TAction) => void;
};

const QuantitySelector: FC<TQuantitySelector> = ({
  id,
  quantity,
  width,
  onUpdateQuantity,
}): ReactElement => {
  const widthQuantitySelector = {
    width: `${width}px`,
  };

  const handleDecreaseQuantity = useCallback(() => {
    onUpdateQuantity(id, "decrease");
  }, [onUpdateQuantity, id]);

  const handleIncreaseQuantity = useCallback(() => {
    onUpdateQuantity(id, "increase");
  }, [onUpdateQuantity, id]);

  return (
    <div className="quantity-input" style={widthQuantitySelector}>
      <Button
        children="-"
        className={`text-price ${quantity <= 1 && "btn-disabled"}`}
        variants={VARIANT.TRANSPARENT}
        onClick={handleDecreaseQuantity}
      />
      <span className="quantity text-price">{quantity}</span>
      <Button
        children="+"
        className="text-price"
        variants={VARIANT.TRANSPARENT}
        onClick={handleIncreaseQuantity}
      />
    </div>
  );
};

export default memo(QuantitySelector);
