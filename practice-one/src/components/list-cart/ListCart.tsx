import { remove } from "../../assets/image";
import Card from "../common/card/Card";
import Image from "../common/image/Image";

const ListCart = () => {
  return (
    <>
      <ul className="list-cart">
        <li className="cart-item">
          <div>{/* <Image /> */}</div>
          <div>
            <div className="detail-dish">
              <span className="text-medium">Smashed Avo</span>
              <span className="text-price">$25.00</span>
            </div>
            <div className="quantity-input">
              <button className="btn-transparent text-price btn-minus">
                -
              </button>
              <span className="quantity text-price">1</span>
              <button className="btn-transparent text-price btn-plus">+</button>
            </div>
            <button className="btn-transparent btn-remove">
              <Image src={remove} className="icon-remove" />
            </button>
          </div>
        </li>
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
    </>
  );
};

export default ListCart;
