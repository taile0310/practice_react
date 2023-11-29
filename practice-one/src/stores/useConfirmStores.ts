import { create } from "zustand";
import { CustomProductProps } from "../types";

interface ConfirmStore {
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
}

export const useConfirmStore = create<ConfirmStore>((set) => ({
  isVisible: false,
  productId: "",
  children: "",
  productInfo: null,
  showConfirm: (id, children, product) =>
    set({ productId: id, isVisible: true, children, productInfo: product }),
  hideConfirm: () => set({ isVisible: false }),
}));
