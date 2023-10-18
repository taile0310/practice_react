// CSS
import "./list-cart.css";

// Interfaces
import { ListCartProps } from "../../types/interface";

// Component
import { Button, Card, Footer, Image } from "..";

// Error Messages and Image
import { remove } from "../../assets/image";

// Component ListCart
const ListCart: React.FC<ListCartProps> = ({
  className,
  handleUpdateQuantity,
  removeFromCart,
  carts,
}) => {
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
                  <div className="img-circle">
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
      <Footer className="copyright" />
    </section>
  );
};

export default ListCart;
