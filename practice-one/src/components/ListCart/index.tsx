// CSS
import "./list-cart.css";

// Component
import { Button, Card, Error, Footer, Heading, Image } from "..";

// React hooks
import { useContext } from "react";

// Image
import { Remove } from "../../assets/image";

//Context
import { CartContext } from "../../context/CartContext";
import { CustomProductProps } from "../../types/TProduct";

export type ListCartProps = {
  className?: string;
  carts: CustomProductProps[];
};

// Component ListCart
const ListCart: React.FC<ListCartProps> = ({ className, carts }): React.ReactElement => {
  const { handleRemoveFromCart, handleUpdateQuantity } =
    useContext(CartContext);

  return (
    <section className={`carts ${className}`}>
      <Heading className="text-h2" element="h2">
        Cart
      </Heading>
      <hr className="dash dash-cart"></hr>
      <div className="grid-container">
        <ul className="list-cart">
          {carts.length === 0 ? (
            <Error className="notify-empty" content="Your cart is empty." />
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
                        className="text-price"
                        variants="transparent"
                        onClick={() =>
                          handleUpdateQuantity(item.id, "decrease")
                        }
                      />
                      <span className="quantity text-price">
                        {item.quantity}
                      </span>
                      <Button
                        textBtn="+"
                        className="text-price"
                        variants="transparent"
                        onClick={() =>
                          handleUpdateQuantity(item.id, "increase")
                        }
                      />
                    </div>
                    <button className="btn-transparent btn-remove">
                      <Image
                        src={Remove}
                        className="icon-remove"
                        onClick={() => handleRemoveFromCart(item.id)}
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
