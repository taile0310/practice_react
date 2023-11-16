// CSS
import "./ListProduct.css";

// Component
import { Button, Error, Heading, Loading } from "..";
import Product from "./Product";

// Type
import { CustomProductProps } from "../../types/Product";
import { memo } from "react";
import { VARIANT } from "../../types/Variant";
import useFetch from "../../hooks/useFetch";
import { ERROR_MESSAGES } from "../../constants/Error";
import ErrorBoundary from "../ErrorBoundary";

// Component ListProduct
const ListProduct: React.FC = memo(() => {
  const { data, isLoading, error, handleShowMorePoducts } = useFetch();

  return (
    <section className="section-menu font-family">
      <Heading className="text-h2 dash" element="h2">
        Sushi food
      </Heading>
      <ul className="list-menu">
        {data?.map((page: CustomProductProps[]) => {
          return page.map((product: CustomProductProps) => {
            const { id, name, image } = product;
            return (
              <ErrorBoundary>
                <Product id={id} name={name} image={image} product={product} />
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
          className="btn-item secondary-text-btn"
          onClick={handleShowMorePoducts}
          variants={VARIANT.SECONDARY}
          size="sm"
          typeText="uppercase"
        />
      )}
    </section>
  );
});

export default ListProduct;
