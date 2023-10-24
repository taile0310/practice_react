import { CustomProductProps } from "../types/TProduct";

// Calculate total value
export const calculatorTotalPrice = (carts: CustomProductProps[]): number => {
  const totalPrice = carts.reduce(
    (accumulator: number, item: CustomProductProps) => {
      const itemTotal = (item.quantity || 0) * (item.price || 0);
      return accumulator + itemTotal;
    },
    0
  );
  return totalPrice;
};
