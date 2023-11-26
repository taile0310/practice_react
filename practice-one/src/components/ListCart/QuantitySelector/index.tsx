// React
import { FC, ReactElement, memo } from "react";

// Component
import { Button } from "../..";

// Stores and Type
import { TAction, VARIANT } from "../../../types";

type TQuantitySelector = {
  id: string;
  quantity: number;
  width?: number;
  handleUpdateQuantity: (id: string, action: TAction) => void;
};

const QuantitySelector: FC<TQuantitySelector> = ({
  id,
  quantity,
  width,
  handleUpdateQuantity,
}): ReactElement => {
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
};

export default memo(QuantitySelector);
