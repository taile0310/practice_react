// React hooks and Router
import React, { MouseEvent, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Helper, Constant and Type
import { getListCart } from "../helpers/DataLocalStorage";
import { TAction } from "../types/Action";
import { CustomProductProps } from "../types/Product";
import { NOTIFY } from "../constants/Error";

type TCartContext = {
  carts: CustomProductProps[];
  getLength: () => number;
  isInCart: (productId: string) => CustomProductProps | undefined;
  handleUpdateQuantity: (productId: string, action: TAction) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleAddToCart: (product: CustomProductProps) => void;
  handleCheckout: (event: MouseEvent<HTMLAnchorElement>) => void;
};

type TChildren = {
  children: React.ReactNode;
};

export const CartContext = createContext({} as TCartContext);

export const CartProvider: React.FC<TChildren> = ({
  children,
}): React.ReactElement => {
  const [carts, setCarts] = useState<CustomProductProps[]>(getListCart());
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("CartProducts", JSON.stringify(carts));
  }, [carts]);

  /**
   * Function handleAddToCart to add products to the cart
   * @param product
   */
  const handleAddToCart = (product: CustomProductProps): void => {
    const confirmed = confirm(NOTIFY.ADD_TO_CART);
    if (confirmed) {
      product.quantity = 1;
      product.isExist = true;
      setCarts((prevCart) => {
        const newCart = [...prevCart, product];
        return newCart;
      });
    }
  };

  /**
   * isInCart function to check if the product is already in the cart
   * @param productId
   * @returns
   */
  const isInCart = (productId: string) => {
    const checkInCart = carts.find((product) => product.id == productId);
    return checkInCart;
  };

  /**
   * Method to remove product from cart
   * @param productId
   */
  const handleRemoveFromCart = (productId: string) => {
    const confirmed = confirm(NOTIFY.REMOVE_FROM_CART);
    if (confirmed) {
      const updatedCart = carts.filter((item) => item.id !== productId);
      setCarts(updatedCart);
    }
  };

  // Method get lenght from cart
  const getLength = () => {
    return carts.length;
  };

  /**
   * Method to update the number of products in the cart
   * @param productId
   * @param action
   */
  const handleUpdateQuantity = (productId: string, action: TAction) => {
    setCarts((carts) => {
      const updatedCart = carts.map((item) => {
        // Check if the product has an id that matches productId
        if (item.id === productId) {
          // Calculate new quantity based on action (increase or decrease)
          const increment = action === "increase" ? 1 : -1;
          const newQuantity = (item.quantity || 0) + increment;
          // Update products with new quantity and check for errors if any
          const updatedItem = {
            ...item,
            quantity: newQuantity >= 1 ? newQuantity : 1,
          };
          return updatedItem;
        }
        return item;
      });
      return updatedCart;
    });
  };

  /**
   * The processing method moves to the checkout page
   * @param event
   */
  const handleCheckout = (event: MouseEvent<HTMLAnchorElement>) => {
    // If cart length is less than or equal to 0, return to menu
    if (carts.length <= 0) {
      alert(NOTIFY.EMPTY);
      event.preventDefault();
      navigate("/menu");
    }
  };

  const cartContextValue: TCartContext = {
    carts,
    isInCart,
    getLength,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
    handleCheckout,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
