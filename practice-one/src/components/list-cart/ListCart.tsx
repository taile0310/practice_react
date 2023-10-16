import { remove } from "../../assets/image";
import Card from "../common/card/Card";
import Image from "../common/image/Image";
import { CustomProductProps, ListCartProps } from "../../types/interface";
import "./list-cart.css";
import Button from "../common/button/Button";
import { useEffect, useState } from "react";
import { ERROR_MESSAGES } from "../../constants/error";

type Action = "increase" | "decrease";

const ListCart: React.FC<ListCartProps> = ({ setCartLength }) => {
  const [carts, setCarts] = useState<CustomProductProps[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("CartProducts") || "[]");
    if (items) {
      setCarts(
        items.map((item: CustomProductProps) => ({
          ...item,
          errorQuantity: null,
        }))
      );
    }
  }, [setCarts]);

  const removeFromCart = (productId: string) => {
    alert("Xóa sản phẩm khỏi giỏ hàng");
    setCarts((prevCarts) => {
      const updatedCart = prevCarts.filter((item) => item.id !== productId);
      localStorage.setItem("CartProducts", JSON.stringify(updatedCart));
      setCartLength(updatedCart.length); // Cập nhật độ dài của giỏ hàng khi xóa sản phẩm
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: string, action: Action) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map((item) => {
        if (item.id === productId) {
          const increment = action === "increase" ? 1 : -1;
          const newQuantity = (item.quantity || 0) + increment;
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

      localStorage.setItem("CartProducts", JSON.stringify(updatedCarts));
      return updatedCarts;
    });
  };

  return (
    <section className="carts">
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
