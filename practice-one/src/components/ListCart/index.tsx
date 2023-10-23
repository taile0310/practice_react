// CSS
import "./list-cart.css";

// Component
import { Button, Card, Footer, Heading, Image } from "..";

// Image
import { remove } from "../../assets/image";
import { TAction } from "../../types/TAction";
import { CustomProductProps } from "../../types/TProduct";

export type ListCartProps = {
  className?: string;
  carts: CustomProductProps[];
  handleUpdateQuantity: (productId: string, action: TAction) => void;
  removeFromCart: (productId: string) => void;
  navigate?: (path: string) => void;
};

// Component ListCart
const ListCart: React.FC<ListCartProps> = ({
  className,
  carts,
  handleUpdateQuantity,
  removeFromCart,
  navigate,
}) => {
  return (
    <section className={`carts ${className}`}>
      <Heading className="text-h2" element="h2" content="Cart" />
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
            titleButton="confirm order"
            className="card"
            showInput={false}
            variants="primary"
            navigate={navigate}
          />
          <Card
            titleCard="Promo Code"
            titleButton="apply"
            className="card"
            showInput={true}
            variants="secondary"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ListCart;
