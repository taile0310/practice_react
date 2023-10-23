// React Hooks
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Constant and Type
import { ERROR_MESSAGES } from "../../constant/error";

// Helpers
import { getListCart } from "../../helpers/data-localStorage";

// Component
import { ListCart } from "../../components";
import { CartLength } from "../../layout/MainLayout";
import { CustomProductProps } from "../../types/TProduct";
import { TAction } from "../../types/TAction";

// Component Cart
const Cart: React.FC = () => {
  const [carts, setCarts] = useState<CustomProductProps[]>([]);
  // Use useEffect to update cart from localStorage
  useEffect(() => {
    // Set the value of state 'carts' based on data from localStorage
    setCarts(
      getListCart().map((item: CustomProductProps) => ({
        ...item,
      }))
    );
  }, [setCarts]);
  const navigate = useNavigate();

  const cartContext = useContext(CartLength);
  if (cartContext === null) {
    return null;
  }
  const { setCartLength } = cartContext;

  /**
   * Method to remove product from cart
   * @param productId
   */
  const removeFromCart = (productId: string) => {
    alert("Are you sure to remove this product from your cart?");
    // Update the new cart by removing products with corresponding 'productId'
    setCarts((prevCarts) => {
      const updatedCart = prevCarts.filter((item) => item.id !== productId);

      // Save the new cart to localStorage
      localStorage.setItem("CartProducts", JSON.stringify(updatedCart));

      // Update the length of the shopping cart
      setCartLength(updatedCart.length);
      return updatedCart;
    });
  };

  /**
   * Method to update the number of products in the cart
   * @param productId
   * @param action
   */
  const handleUpdateQuantity = (productId: string, action: TAction) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map((item) => {
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
      localStorage.setItem("CartProducts", JSON.stringify(updatedCarts));
      return updatedCarts;
    });
  };

  return (
    <ListCart
      handleUpdateQuantity={handleUpdateQuantity}
      removeFromCart={removeFromCart}
      carts={carts}
      navigate={navigate}
    />
  );
};

export default Cart;
