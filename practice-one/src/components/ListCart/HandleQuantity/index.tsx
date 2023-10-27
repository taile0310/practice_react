import { useContext } from "react";
import { Button } from "../..";
import { CartContext } from "../../../context/CartContext";

type THandleQuantity = {
  id: string;
  quantity: number;
};
const HandleQuantity = ({ id, quantity }: THandleQuantity) => {
  const { handleUpdateQuantity } = useContext(CartContext);
  return (
    <div className="quantity-input">
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
};

export default HandleQuantity;
