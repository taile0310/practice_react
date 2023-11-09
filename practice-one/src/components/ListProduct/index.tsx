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

// Component ListProduct
const ListProduct: React.FC = memo(() => {
  const { data, isLoading, error, handleLoadMore } = useFetch();

  return (
    <section className="section-menu font-family">
      <Heading className="text-h2 dash" element="h2">
        Sushi food
      </Heading>
      <ul className="list-menu">
        {data?.map((page: CustomProductProps[]) => {
          return page.map((product: CustomProductProps) => {
            return (
              <Product
                id={product.id}
                name={product.name}
                image={product.image}
                product={product}
              />
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
          onClick={handleLoadMore}
          variants={VARIANT.SECONDARY}
          size="sm"
          typeText="uppercase"
        />
      )}
    </section>
  );
});

export default ListProduct;
