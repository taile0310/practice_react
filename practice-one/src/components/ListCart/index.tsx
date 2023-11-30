// CSS
import "./ListCart.css";

// Component
import { Card, CartItem, ErrorBoundary, Heading } from "..";

// React hooks
import { FC, ReactElement, memo } from "react";
import { useShallow } from "zustand/react/shallow";

// Stores and Type
import { useCartStore } from "../../stores";
import { VARIANT } from "../../types";

export type ListCartProps = {
  className?: string;
};

// Component ListCart
const ListCart: FC<ListCartProps> = ({ className }): ReactElement => {
  // Use hooks to get functions
  const { carts, handleRemoveFromCart, handleUpdateQuantity } = useCartStore(
    useShallow((state) => ({
      carts: state.carts,
      handleRemoveFromCart: state.handleRemoveFromCart,
      handleUpdateQuantity: state.handleUpdateQuantity,
    }))
  );

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
                  onRemoveFromCart={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
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
