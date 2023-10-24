// CSS
import "./list-product.css";

// React hooks
import { useContext } from "react";

// Component
import { Button, Error, Footer, Heading, Image, Loading } from "..";

// Constants, Image, Message error
import { ERROR_MESSAGES } from "../../constant/error";
import { CustomProductProps } from "../../types/TProduct";
import { CartContext } from "../../context/CartContext";

export type ListProductProps = {
  error: boolean;
  isLoading: boolean;
  defaultValue: number;
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
  defaultValue,
  onShowMorePoducts,
}) => {
  const cartContext = useContext(CartContext);
  if (cartContext === null) {
    return null;
  }
  const { isInCart, handleAddToCart, handleRemoveFromCart } = cartContext;

  return (
    <section className="section-menu font-family">
      <Heading className="text-h2" element="h2" content="Sushi food" />

      <hr className="dash dash-menu"></hr>
      {error && (
        <Error
          className="messages-error text-medium"
          content={ERROR_MESSAGES.FETCH}
        />
      )}

      {isLoading && <Loading />}
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
                    ? handleRemoveFromCart(product.id)
                    : handleAddToCart(product);
                }}
              />
              <span className="text-small">{product.name}</span>
            </li>
          );
        })}
      </ul>

      <Button
        textBtn="Load more"
        className={`btn-item secondary-text-btn ${isFull ? "isFull" : ""}`}
        onClick={onShowMorePoducts}
        variants="secondary"
        size="medium"
        typeText="uppercase"
      />
      <Footer />
    </section>
  );
};

export default ListProduct;
