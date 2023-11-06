// React hooks and Router
import React, { MouseEvent, createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

// Helper, Constant and Type
import { getListCart } from "../helpers/DataLocalStorage";
import { CustomProductProps } from "../types/Product";
import { NOTIFY } from "../constants/Error";
import { TAction } from "../types/Action";
import { reducer } from "../reducers";

type TCartContext = {
  carts: CustomProductProps[];
  getLength: () => number;
  isInCart: (productId: string) => CustomProductProps | undefined;
  handleRemoveFromCart: (productId: string) => void;
  handleAddToCart: (product: CustomProductProps) => void;
  handleCheckout: (event: MouseEvent<HTMLAnchorElement>) => void;
  handleUpdateQuantity: (productId: string, action: TAction) => void;
};

type TChildren = {
  children: React.ReactNode;
};

export const CartContext = createContext({} as TCartContext);

export const CartProvider: React.FC<TChildren> = ({
  children,
}): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, { carts: getListCart() });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("CartProducts", JSON.stringify(state.carts));
  }, [state.carts]);

  /**
   * Function handleAddToCart to add products to the cart
   * @param product
   */
  const handleAddToCart = (product: CustomProductProps): void => {
    const confirmed = window.confirm(NOTIFY.ADD_TO_CART);
    if (confirmed) {
      product.quantity = 1;
      product.isExist = true;
      dispatch({ type: "ADD_TO_CART", product });
    }
  };

  /**
   * isInCart function to check if the product is already in the cart
   * @param productId
   * @returns
   */
  const isInCart = (productId: string) => {
    const checkInCart = state.carts.find((product) => product.id === productId);
    return checkInCart;
  };

  /**
   * Method to remove product from cart
   * @param productId
   */
  const handleRemoveFromCart = (productId: string) => {
    const confirmed = window.confirm(NOTIFY.REMOVE_FROM_CART);
    if (confirmed) {
      dispatch({ type: "REMOVE_FROM_CART", productId });
    }
  };

  /**
   * Method to update the number of products in the cart
   * @param productId
   * @param action
   */
  const handleUpdateQuantity = (productId: string, action: TAction) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, action });
  };

  // Method get lenght from cart
  const getLength = () => {
    return state.carts.length;
  };

  /**
   * The processing method moves to the checkout page
   * @param event
   */
  const handleCheckout = (event: MouseEvent<HTMLAnchorElement>) => {
    // If cart length is less than or equal to 0, return to menu
    if (state.carts.length <= 0) {
      alert(NOTIFY.EMPTY);
      event.preventDefault();
      navigate("/menu");
    }
  };

  const cartContextValue: TCartContext = {
    carts: state.carts,
    isInCart,
    getLength,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout,
    handleUpdateQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
