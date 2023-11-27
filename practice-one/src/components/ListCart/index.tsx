// CSS
import "./ListCart.css";

// Component
import { Card, CartItem, ErrorBoundary, Heading } from "..";

// React hooks
import { FC, ReactElement, memo } from "react";

// Stores and Type
import { useCartStore } from "../../stores";
import { VARIANT } from "../../types";

export type ListCartProps = {
  className?: string;
};

// Component ListCart
const ListCart: FC<ListCartProps> = ({ className }): ReactElement => {
  const { carts, handleRemoveFromCart, handleUpdateQuantity } = useCartStore();

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
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  price={price}
                  quantity={quantity!}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateQuantity={handleUpdateQuantity}
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
};

export default memo(ListCart);
