// CSS
import "./list-product.css";

// Component
import { Button, Error, Footer, Heading, Loading } from "..";

// Constants, Image, Message error
// import { ERROR_MESSAGES } from "../../constant/error";
import { CustomProductProps } from "../../types/Product";
import Product from "./Product";

export type ListProductProps = {
  error: string | null;
  isLoading: boolean;
  displayedProductCount: number;
  isFull: boolean;
  products: CustomProductProps[];
  onShowMorePoducts: () => void;
};

// Component ListProduct
const ListProduct: React.FC<ListProductProps> = ({
  isLoading,
  error,
  products,
  isFull,
  displayedProductCount,
  onShowMorePoducts,
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
        onClick={onShowMorePoducts}
        variants="secondary"
        size="sm"
        typeText="uppercase"
      />
      <Footer />
    </section>
  );
};

export default ListProduct;
