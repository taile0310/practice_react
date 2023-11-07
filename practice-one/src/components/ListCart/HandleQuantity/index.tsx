import { memo, useContext } from "react";
import { Button } from "../..";
import { CartContext } from "../../../stores/contexts/CartContext";

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
        textBtn="-"
        className={`text-price ${quantity <= 1 && "btn-disabled"}`}
        variants="transparent"
        onClick={() => handleUpdateQuantity(id, "decrease")}
      />
      <span className="quantity text-price">{quantity}</span>
      <Button
        textBtn="+"
        className="text-price"
        variants="transparent"
        onClick={() => handleUpdateQuantity(id, "increase")}
      />
    </div>
  );
});

export default HandleQuantity;
