// CSS
import "./ListProduct.css";
// React
import { FC, ReactElement, memo, useCallback } from "react";
// Component
import { Button, Error, ErrorBoundary, Heading, Loading, Product } from "..";
// Type and Store
import { CustomProductProps, VARIANT } from "../../types";
import { ERROR_MESSAGES } from "../../constants";
import { useCartStore, useToggleStore } from "../../stores";
// Hooks custom
import { useFetch } from "../../hooks";

// Component ListProduct
const ListProduct: FC = (): ReactElement => {
  const {
    data,
    isLoading,
    error,
    isFull,
    handleShowMoreProducts,
    handleRemoveProduct,
  } = useFetch();

  const { toggle, handleToggleUpdateProduct, onToggleAddProduct } =
    useToggleStore();

  const { handleAddToCart, handleRemoveFromCart } = useCartStore();

  const handleToggleAddProduct = useCallback(() => {
    onToggleAddProduct();
  }, [onToggleAddProduct]);

  const handleShowMore = useCallback(() => {
    handleShowMoreProducts();
  }, [handleShowMoreProducts]);

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
          onClick={handleToggleAddProduct}
          style={{ width: "fit-content", alignSelf: "end" }}
        />
      )}
      <ul className="list-menu">
        {data?.map((page: CustomProductProps[]) => {
          return page.map((product: CustomProductProps) => {
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
          onClick={handleShowMore}
          variants={VARIANT.SECONDARY}
          size="sm"
          typeText="uppercase"
        />
      )}
    </section>
  );
};
export default memo(ListProduct);
