import { create } from "zustand";
import { NOTIFY } from "../constants/Error";
import { CustomProductProps } from "../types/Product";
import { getListCart, setListCart } from "../helpers/DataLocalStorage";
import { useAlertStore } from "./useAlertStore";

type TAction = "increase" | "decrease";

type TState = {
  carts: CustomProductProps[];
};

type TActions = {
  handleAddToCart: (product: CustomProductProps) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleUpdateQuantity: (productId: string, action: TAction) => void;
  isInCart: (productId: string) => CustomProductProps | undefined;
  getLength: () => number;
  handleCheckout: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  clearCarts: () => void;
  handleUpdateProductInCart: (
    productId: string,
    updatedProduct: CustomProductProps
  ) => void;
  handleUpdateCartAfterRemove: (productId: string) => void;
};
export const useCartStore = create<TState & TActions>((set, get) => ({
  carts: getListCart(),

  handleAddToCart: (product: CustomProductProps): void => {
    try {
      product.quantity = 1;
      product.isExist = true;
      set((state) => {
        const newState = { ...state, carts: [...state.carts, product] };
        setListCart(newState.carts);
        return newState;
      });
    } catch (error) {
      alert(NOTIFY.ADD_FAILD);
    }
  },

  handleRemoveFromCart: (productId: string): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.filter((item) => item.id !== productId),
      };
      setListCart(newState.carts);
      return newState;
    });
  },
  handleUpdateQuantity: (productId: string, action: TAction): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === productId) {
            const increment = action === "increase" ? 1 : -1;
            const newQuantity = (item.quantity || 0) + increment;
            const updatedItem = {
              ...item,
              quantity: newQuantity >= 1 ? newQuantity : 1,
            };
            return updatedItem;
          }
          return item;
        }),
      };
      setListCart(newState.carts);
      return newState;
    });
  },

  isInCart: (productId: string): CustomProductProps | undefined => {
    const product = get().carts.find((p) => p.id === productId);
    return product;
  },

  getLength: (): number => get().carts.length,

  handleCheckout: (event: React.MouseEvent<HTMLAnchorElement>): void => {
    if (get().carts.length <= 0) {
      useAlertStore.getState().showAlert(NOTIFY.EMPTY);
      event.preventDefault();
    }
  },

  handleUpdateProductInCart: (
    productId: string,
    updatedProduct: CustomProductProps
  ): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.map((item) =>
          item.id === productId ? { ...item, ...updatedProduct } : item
        ),
      };
      setListCart(newState.carts);
      return newState;
    });
  },

  clearCarts: (): void => {
    localStorage.clear();
    set({ carts: [] });
  },

  handleUpdateCartAfterRemove: (productId: string): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.filter((item) => item.id !== productId),
      };
      setListCart(newState.carts);
      return newState;
    });
  },
}));
