// CSS
import "./ListCart.css";

// Component
import { Card, Footer, Heading } from "..";
import CartItem from "./CartItem";

// React hooks
import { useContext } from "react";

//Context
import { CartContext } from "../../contexts/CartContext";

export type ListCartProps = {
  className?: string;
};

// Component ListCart
const ListCart: React.FC<ListCartProps> = ({
  className,
}): React.ReactElement => {
  const { carts } = useContext(CartContext);
  return (
    <section className={`carts ${className}`}>
      <Heading className="text-h2 dash" element="h2">
        Cart
      </Heading>
      <div className="grid-container">
        <ul className="list-cart">
          {carts.length === 0 && (
            <p className="notify-empty">Your cart is empty.</p>
          )}
          {carts.map((item) => {
            const { id, name, image, price, quantity } = item;
            return (
              <CartItem
                id={id}
                name={name}
                image={image}
                price={price}
                quantity={quantity}
              />
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
