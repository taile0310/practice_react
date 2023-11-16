// Type
import { CustomProductProps } from "../types/Product";

// Calculate total value
export const calculatorTotalPrice = (carts: CustomProductProps[]): number => {
  if (!carts) return 0;
  const totalPrice = carts.reduce(
    (accumulator: number, item: CustomProductProps) => {
      const itemTotal = (item.quantity || 0) * (item.price || 0);
      return accumulator + itemTotal;
    },
    0
  );

  return totalPrice;
};
