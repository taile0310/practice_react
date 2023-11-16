// CSS
import "./ListCart.css";

// Component
import { Card, ErrorBoundary, Heading } from "..";
import CartItem from "./CartItem";

// React hooks
import { memo, useContext } from "react";

//Context
import { CartContext } from "../../stores/contexts/CartContext";
import { VARIANT } from "../../types/Variant";

export type ListCartProps = {
  className?: string;
};

// Component ListCart
const ListCart: React.FC<ListCartProps> = memo(
  ({ className }): React.ReactElement => {
    const { carts } = useContext(CartContext);
    return (
      <section className={`carts ${className}`}>
        <Heading className="text-h2 dash" element="h2">
          Cart
        </Heading>
        <div className="grid-container">
          <ul className="list-cart">
            {carts?.length === 0 && (
              <p className="notify-empty">Your cart is empty.</p>
            )}
            {carts?.map((item) => {
              const { id, name, image, price, quantity } = item;
              return (
                <ErrorBoundary>
                  <CartItem
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                    quantity={quantity}
                  />
                </ErrorBoundary>
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
              variants={VARIANT.SECONDARY}
            />
          </div>
        </div>
      </section>
    );
  }
);

export default ListCart;
