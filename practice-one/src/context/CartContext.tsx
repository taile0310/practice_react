// React hooks and Router
import React, { MouseEvent, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Helper, Constant and Type
import { getListCart } from "../helpers/data-localStorage";
import { ERROR_MESSAGES, NOTIFY } from "../constant/error";
import { TAction } from "../types/TAction";
import { CustomProductProps } from "../types/TProduct";

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
    alert("Are you sure you want to add this product to your cart?");
    product.quantity = 1;
    product.isExist = true;
    setCarts((prevCart) => {
      const newCart = [...prevCart, product];
      return newCart;
    });
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
    alert("Are you sure to remove this product from your cart?");
    const updatedCart = carts.filter((item) => item.id !== productId);
    setCarts(updatedCart);
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
    setCarts((prevCarts) => {
      const updatedCart = prevCarts.map((item) => {
        // Check if the product has an id that matches productId
        if (item.id === productId) {
          // Calculate new quantity based on action (increase or decrease)
          const increment = action === "increase" ? 1 : -1;
          const newQuantity = (item.quantity || 0) + increment;
          // Update products with new quantity and check for errors if any
          const updatedItem = {
            ...item,
            quantity: newQuantity >= 1 ? newQuantity : 1,
            errorQuantity:
              newQuantity < 1 ? ERROR_MESSAGES.QUANTITY_NAVIGATIVE : "",
          };
          return updatedItem;
        }
        return item;
      });
      // Save the new cart to localStorage after updating the quantity
      localStorage.setItem("CartProducts", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // The processing method moves to the checkout page
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
