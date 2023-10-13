import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import "./listProduct.css";
import Button from "../common/button/Button";
import { BASE_URL } from "../../constants/base-url";
import { CustomCartProps, CustomProductProps } from "../../types/interface";
import Image from "../common/image/Image";
import Footer from "../footer/Footer";
import { spinner } from "../../assets/image";

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [visible, setVisible] = useState(8);
  const [error, setError] = useState(false);
  const [cart, setCart] = useLocalStorageState<CustomCartProps>(
    "CartProducts",
    {}
  );

  const showMorePoducts = () => {
    setVisible((prevValue) => prevValue + 4);
    console.log("showMorePoducts");
  };

  const addToCart = (product: CustomProductProps): void => {
    alert("Thêm sản phẩm vào giỏ hàng");
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  useEffect(() => {
    fetchData(BASE_URL);
  }, []);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = (await response.json()) as CustomProductProps[];
        setProducts(data);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }

  if (error) {
    return <h3>An error occurred when fetching data.</h3>;
  }

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
        {products.slice(0, visible).map((product) => {
          return (
            <li className="menu-item" key={product.id}>
              <Image
                className="img-rectangle"
                src={`${product.image}`}
                alt={product.name}
                onClick={() => addToCart(product)}
              />
              <span className="text-small">{product.name}</span>
            </li>
          );
        })}
      </ul>
      <Button
        textBtn="Load more"
        className="btn-item secondary-text-btn"
        onClick={showMorePoducts}
      />

      <Footer className="copyright-text" />
    </section>
  );
};

export default ListProduct;
