import useLocalStorageState from "use-local-storage-state";
import { remove } from "../../assets/image";
import Card from "../common/card/Card";
import Image from "../common/image/Image";
import { CustomCartProps } from "../../types/interface";
import "./list-cart.css";
import Button from "../common/button/Button";

const ListCart = () => {
  const [cart, setCart] = useLocalStorageState<CustomCartProps>(
    "CartProducts",
    {}
  );

  const getProducts = () => Object.values(cart || {});

  return (
    <section className="carts">
      <h3 className="text-h3">CART</h3>
      <hr className="dash dash-cart"></hr>
      <div className="grid-container">
        <ul className="list-cart">
          {getProducts().map((item) => {
            return (
              <li className="cart-item" key={item.id}>
                <div>
                  <Image className="img-circle" src={`${item.image}`} />
                </div>
                <div className="order-group">
                  <div className="detail-dish">
                    <span className="text-medium">{item.name}</span>
                    <span className="text-price">${item.price}.00</span>
                  </div>
                  <div className="quantity-input">
                    <button className="btn-transparent text-price btn-minus">
                      -
                    </button>
                    <span className="quantity text-price">{item.quantity}</span>
                    {/* <button >
                      +
                    </button> */}
                    <Button
                      textBtn="+"
                      className="btn-transparent text-price btn-plus"
                      onClick={increaseQuantity}
                    />
                  </div>
                  <button className="btn-transparent btn-remove">
                    <Image src={remove} className="icon-remove" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div>
          <Card
            titleCard="Your Subtotal"
            titleButton="Confirm Order"
            className="card-primary"
            showInput={false}
          />
          <Card
            titleCard="Promo Code"
            titleButton="Apply"
            className="card-secondary"
            showInput={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ListCart;
