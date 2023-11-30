// Library
import { create } from "zustand";

// Type
import { CustomProductProps } from "../types";

// Define props for ConfirmStore
type ConfirmStore = {
  productId: string;
  isVisible: boolean;
  children: string;
  productInfo?: CustomProductProps | null;
  showConfirm: (
    productId: string,
    children: string,
    product: CustomProductProps | null
  ) => void;
  hideConfirm: () => void;
};

export const useConfirmStore = create<ConfirmStore>((set) => ({
  isVisible: false,
  productId: "",
  children: "",
  productInfo: null,
  /**
   * Displays a confirmation box with product information and a confirmation button.
   * @param id
   * @param children
   * @param product
   * @returns
   */
  showConfirm: (id, children, product) =>
    set({ productId: id, isVisible: true, children, productInfo: product }),

  // Hide confirm
  hideConfirm: () => set({ isVisible: false }),
}));
