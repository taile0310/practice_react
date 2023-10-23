import { CustomProductProps } from "../types/TProduct";
import { getListCart } from "./data-localStorage";

// Calculate total value
export const calculatorTotalPrice = (): number => {
  const totalPrice = getListCart().reduce(
    (accumulator: number, item: CustomProductProps) => {
      const itemTotal = (item.quantity || 0) * (item.price || 0);
      return accumulator + itemTotal;
    },
    0
  );
  return totalPrice;
};
