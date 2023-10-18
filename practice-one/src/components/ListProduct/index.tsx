// CSS
import "./list-product.css";

// Component
import { Button, Footer, Image } from "..";

// Interface
import { ListProductProps } from "../../types/interface";

// Constants, Image, Message error
import { spinner } from "../../assets/image";
import { ERROR_MESSAGES } from "../../constants/error";

// Component ListProduct
const ListProduct: React.FC<ListProductProps> = ({
  addToCart,
  isInCart,
  removeFromCart,
  showMorePoducts,
  isLoading,
  error,
  products,
  isFull,
  defaultValue,
}) => {
  // If there is an error, display the error message
  if (error) {
    return (
      <p className="messages-error text-medium">{ERROR_MESSAGES.fetchError}</p>
    );
  }

  // If loading data, display the loading icon
  if (isLoading) {
    return (
      <div className="spinner">
        <Image src={spinner} />
      </div>
    );
  }

  return (
    <section className="section-menu font-family">
      <h3 className="text-h3">Sushi food</h3>
      <hr className="dash dash-menu"></hr>
      <ul className="list-menu">
        {products.slice(0, defaultValue).map((product) => {
          return (
            <li className="menu-item" key={product.id}>
              <Image
                className={` img-rectangle ${
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
      <Button
        textBtn="Load more "
        className={`btn-item secondary-text-btn ${isFull ? "isFull" : ""}`}
        onClick={showMorePoducts}
      />
      <Footer className="copyright-text" />
    </section>
  );
};

export default ListProduct;
