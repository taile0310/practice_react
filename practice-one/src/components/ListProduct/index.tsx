// CSS
import "./list-product.css";

// Component
import { Button, Footer, Image } from "..";

// Interface
import { ListProductProps } from "../../types";

// Constants, Image, Message error
import { spinner } from "../../assets/image";
import { ERROR_MESSAGES } from "../../constant/error";
import Heading from "../common/Heading";
import { BTN_VARIANTS } from "../../constant/btn";

// Component ListProduct
const ListProduct: React.FC<ListProductProps> = ({
  isLoading,
  error,
  products,
  isFull,
  defaultValue,
  addToCart,
  isInCart,
  removeFromCart,
  showMorePoducts,
}) => {
  return (
    <section className="section-menu font-family">
      <Heading className="text-h2" element="h2" content="Sushi food" />
      <hr className="dash dash-menu"></hr>
      {isLoading ? (
        <div className="spinner">
          <Image src={spinner} />
        </div>
      ) : error ? (
        <p className="messages-error text-medium">
          {ERROR_MESSAGES.fetchError}
        </p>
      ) : (
        <ul className="list-menu">
          {products.slice(0, defaultValue).map((product) => {
            return (
              <li className="menu-item" key={product.id}>
                <Image
                  className={`img-rectangle ${
                    isInCart(product.id) ? "added-to-cart" : ""
                  }`}
                  src={`${product.image}`}
                  alt={product.name}
                  onClick={() => {
                    isInCart(product.id)
                      ? removeFromCart(product.id)
                      : addToCart(product);
                  }}
                />
                <span className="text-small">{product.name}</span>
              </li>
            );
          })}
        </ul>
      )}

      <Button
        textBtn="Load more"
        className={`btn-item secondary-text-btn ${isFull ? "isFull" : ""}`}
        onClick={showMorePoducts}
        variants="secondary"
        size="medium"
        typeText="uppercase"
      />
      <Footer />
    </section>
  );
};

export default ListProduct;
