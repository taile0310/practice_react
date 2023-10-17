// CSS
import "./list-cart.css";

// React Hooks
import { useEffect, useState } from "react";

// Interfaces
import { CustomProductProps, ListCartProps } from "../../types/interface";

// Component
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Image from "../common/image/Image";

// Error Messages and Image
import { ERROR_MESSAGES } from "../../constants/error";
import { remove } from "../../assets/image";
import { getListCart } from "../../helper/data-localStorage";

// Declare the action type
type Action = "increase" | "decrease";

// Component ListCart
const ListCart: React.FC<ListCartProps> = ({ setCartLength, className }) => {
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
              newQuantity < 1 ? ERROR_MESSAGES.quantityNegative : "",
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
    <section className={`carts ${className}`}>
      <h3 className="text-h3">CART</h3>
      <hr className="dash dash-cart"></hr>
      <div className="grid-container">
        <ul className="list-cart">
          {carts.length === 0 ? (
            <p className="notify-empty">Your cart is empty.</p>
          ) : (
            ""
          )}
          {carts.map((item) => {
            return (
              <li key={item.id}>
                <div className="cart-item">
                  <div>
                    <Image className="img-circle" src={`${item.image}`} />
                  </div>
                  <div className="order-group">
                    <div className="detail-dish">
                      <span className="text-medium">{item.name}</span>
                      <span className="text-price">${item.price}.00</span>
                    </div>
                    <div className="quantity-input">
                      <Button
                        textBtn="-"
                        className="btn-transparent text-price btn-minus"
                        onClick={() =>
                          handleUpdateQuantity(item.id, "decrease")
                        }
                      />
                      <span className="quantity text-price">
                        {item.quantity}
                      </span>
                      <Button
                        textBtn="+"
                        className="btn-transparent text-price btn-plus"
                        onClick={() =>
                          handleUpdateQuantity(item.id, "increase")
                        }
                      />
                    </div>
                    <button className="btn-transparent btn-remove">
                      <Image
                        src={remove}
                        className="icon-remove"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </button>
                  </div>
                </div>
                {item.errorQuantity && (
                  <div className="messages-error display-error">
                    {item.errorQuantity}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div>
          <Card
            titleCard="Your Subtotal"
            titleButton="Confirm Order"
            className="card-primary"
            showInput={false}
          />
          <Card
            titleCard="Promo Code"
            titleButton="Apply"
            className="card-secondary"
            showInput={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ListCart;
