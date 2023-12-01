// CSS
import "./ListProduct.css";
// React
import { FC, ReactElement, memo } from "react";
import { useShallow } from "zustand/react/shallow";

// Component
import { Button, Error, ErrorBoundary, Heading, Loading, Product } from "..";

// Type and Store
import { CustomProductProps, VARIANT } from "../../types";
import { ERROR_MESSAGES } from "../../constants";
import { cartStore, productStore } from "../../stores";

// Hooks custom
import { useFetch } from "../../hooks";

// Component ListProduct
const ListProduct: FC = (): ReactElement => {
  // Use hooks to get functions
  const {
    data,
    isLoading,
    error,
    isFull,
    handleShowMoreProducts,
    handleRemoveProduct,
  } = useFetch();

  const { toggle, handleToggleUpdateProduct, onToggleAddProduct } =
    productStore(
      useShallow((state) => ({
        toggle: state.toggle,
        handleToggleUpdateProduct: state.handleToggleUpdateProduct,
        onToggleAddProduct: state.onToggleAddProduct,
      }))
    );

  const { handleAddToCart, handleRemoveFromCart } = cartStore(
    useShallow((state) => ({
      handleAddToCart: state.handleAddToCart,
      handleRemoveFromCart: state.handleRemoveFromCart,
    }))
  );

  return (
    <section className="section-menu font-family overlay">
      <Heading className="text-h2 dash" element="h2">
        Sushi food
      </Heading>
      {!isLoading && !error && (
        <Button
          className="btn secondary-text-btn"
          variants={VARIANT.SECONDARY}
          size="sm"
          typeText="uppercase"
          children="Add Product"
          onClick={onToggleAddProduct}
          style={{ width: "fit-content", alignSelf: "end" }}
        />
      )}
      <ul className="list-menu">
        {data?.map((products: CustomProductProps[]) => {
          return products.map((product: CustomProductProps) => {
            const { id, name, image } = product;
            return (
              <ErrorBoundary>
                <Product
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  product={product}
                  toggle={toggle}
                  onRemoveProduct={handleRemoveProduct}
                  onRemoveFromCart={handleRemoveFromCart}
                  onAddToCart={handleAddToCart}
                  onToggleUpdateProduct={handleToggleUpdateProduct}
                />
              </ErrorBoundary>
            );
          });
        })}
      </ul>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error
          className="messages-error text-medium"
          content={ERROR_MESSAGES.FETCH}
        />
      ) : (
        <Button
          children="Load more"
          className={`btn-item secondary-text-btn ${isFull && "isFull"}`}
          onClick={handleShowMoreProducts}
          variants={VARIANT.SECONDARY}
          size="sm"
          typeText="uppercase"
        />
      )}
    </section>
  );
};
export default memo(ListProduct);
