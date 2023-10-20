// React Hooks
import { useContext, useEffect, useState } from "react";

// Component
import { ListCart } from "../../components";
import { Action, CustomProductProps } from "../../types";
import { getListCart } from "../../helpers/data-localStorage";
import { ERROR_MESSAGES } from "../../constant/error";
import { CartLength } from "../../layout/MainLayout";

// Component Cart
const Cart = () => {
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
  const handleUpdateQuantity = (productId: string, action: Action) => {
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
    <>
      <ListCart
        handleUpdateQuantity={handleUpdateQuantity}
        removeFromCart={removeFromCart}
        carts={carts}
      />
    </>
  );
};

export default Cart;
