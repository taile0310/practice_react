import useLocalStorageState from "use-local-storage-state";
import { remove } from "../../assets/image";
import Card from "../common/card/Card";
import Image from "../common/image/Image";
import { CustomCartProps } from "../../types/interface";
import "./list-cart.css";
import Button from "../common/button/Button";

type Operation = "increase" | "decrease";

const ListCart = () => {
  const [cart, setCart] = useLocalStorageState<CustomCartProps>(
    "CartProducts",
    {}
  );

  const getProducts = () => Object.values(cart || {});

  const handleUpdateQuantity = (productId: string, operation: Operation) => {
    setCart((prevValue) => {
      const updatedCart = { ...prevValue };
      operation == "increase"
        ? (updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: (updatedCart[productId].quantity || 0) + 1,
          })
        : (updatedCart[productId].quantity || 0) > 1
        ? (updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: (updatedCart[productId].quantity || 0) - 1,
          })
        : alert("Số lượng không thể nhỏ hơn 1!");
      return updatedCart;
    });
  };

  const removeFromCart = (productId: string) => {
    alert("Xóa sản phẩm khỏi giỏ hàng");
    setCart((prevCart: CustomCartProps | undefined) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  return (
    <section className="carts">
      <h3 className="text-h3">CART</h3>
      <hr className="dash dash-cart"></hr>
      <div className="grid-container">
        <ul className="list-cart">
          {getProducts().map((item) => {
            return (
              <li className="cart-item" key={item.id}>
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
                      onClick={() => handleUpdateQuantity(item.id, "decrease")}
                    />
                    <span className="quantity text-price">{item.quantity}</span>
                    <Button
                      textBtn="+"
                      className="btn-transparent text-price btn-plus"
                      onClick={() => handleUpdateQuantity(item.id, "increase")}
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
