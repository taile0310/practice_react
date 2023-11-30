// Library
import { create } from "zustand";

// Types, constants and helpers
import { NOTIFY } from "../constants/Error";
import { CustomProductProps } from "../types/Product";
import { getListCart, setListCart } from "../helpers/DataLocalStorage";

// Store
import { useAlertStore } from "./useAlertStore";

// Define action
type TAction = "increase" | "decrease";

// Define state
type TState = {
  carts: CustomProductProps[];
};

// Difine props for CartStore
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
// Create store using Zustand
export const useCartStore = create<TState & TActions>((set, get) => ({
  // Initialize shopping cart from data stored in localStorage
  carts: getListCart(),

  /**
   * Add product to cart.
   * @param product - The product needs to be added to the cart
   */
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

  /**
   * Remove product from cart.
   * @param productId - ID of the product to be deleted.
   */
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
  /**
   * Update the quantity of products in the cart.
   * @param productId - ID of the product whose quantity needs to be updated.
   * @param action
   */
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
  /**
   * Check if the product exists in the cart.
   * @param productId - ID of the product to be checked.
   * @returns If the product exists in the cart, otherwise it returns undefined.

   */
  isInCart: (productId: string): CustomProductProps | undefined => {
    const product = get().carts.find((p) => p.id === productId);
    return product;
  },

  /**
   * Get the number of products in the shopping cart.
   * @returns Number of products in the shopping cart.
   */
  getLength: (): number => get().carts.length,

  /**
   * Handles checkout, displaying a warning if the cart is empty.
   * @param event
   */
  handleCheckout: (event: React.MouseEvent<HTMLAnchorElement>): void => {
    if (get().carts.length <= 0) {
      useAlertStore.getState().showAlert(NOTIFY.EMPTY);
      event.preventDefault();
    }
  },

  /**
   * Update product information in the shopping cart.
   * @param productId - ID of the product that needs to be updated.
   * @param updatedProduct - New product information.
   */
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

  // Function to delete the entire shopping cart
  clearCarts: (): void => {
    localStorage.clear();
    set({ carts: [] });
  },

  /**
   * Update the shopping cart after removing the product from the list.
   * @param productId - ID of the product to be removed from the cart.
   */
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
