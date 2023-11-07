// CSS
import "./ListProduct.css";

// Component
import { Button, Error, Footer, Heading, Loading } from "..";
import Product from "./Product";

// Type
import { CustomProductProps } from "../../types/Product";
import { memo } from "react";

export type ListProductProps = {
  error: string | null;
  isLoading: boolean;
  displayedProductCount: number;
  isFull: boolean;
  products: CustomProductProps[];
  onShowMoreProducts: () => void;
};

// Component ListProduct
const ListProduct: React.FC<ListProductProps> = memo(
  ({
    isLoading,
    error,
    products,
    isFull,
    displayedProductCount,
    onShowMoreProducts,
  }): React.ReactElement => {
    return (
      <section className="section-menu font-family">
        <Heading className="text-h2 dash" element="h2">
          Sushi food
        </Heading>
        {error && (
          <Error className="messages-error text-medium" content={error} />
        )}

        {isLoading && <Loading />}
        <ul className="list-menu">
          {products.slice(0, displayedProductCount).map((product) => {
            const { id, name, image } = product;
            return (
              <Product id={id} name={name} image={image} product={product} />
            );
          })}
        </ul>

        <Button
          textBtn="Load more"
          className={`btn-item secondary-text-btn ${
            isFull || error ? "isFull" : ""
          }`}
          onClick={onShowMoreProducts}
          variants="secondary"
          size="sm"
          typeText="uppercase"
        />
        <Footer />
      </section>
    );
  }
);

export default ListProduct;
