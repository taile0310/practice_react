import React, { useEffect, useState } from "react";

import "./listProduct.css";
import Button from "../common/button/Button";
import { BASE_URL } from "../../constants/base-url";
import { CustomProductProps, ListProductProps } from "../../types/interface";
import Image from "../common/image/Image";
import Footer from "../footer/Footer";
import { spinner } from "../../assets/image";
import { ERROR_MESSAGES } from "../../constants/error";

const ListProduct: React.FC<ListProductProps> = ({ setCartLength }) => {
  const items = JSON.parse(localStorage.getItem("CartProducts") || "[]");

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [defaultValue, setDefaultValue] = useState(8);
  const [error, setError] = useState(false);
  const [carts, setCarts] = useState<CustomProductProps[]>(items);

  useEffect(() => {
    fetchData(BASE_URL);
  }, []);

  useEffect(() => {
    setIsFull(products.length <= defaultValue);
  }, [products, defaultValue]);

  useEffect(() => {
    localStorage.setItem("CartProducts", JSON.stringify(carts));
  }, [carts]);

  const [isFull, setIsFull] = useState(false);

  const showMorePoducts = () => {
    const newValue = defaultValue + 4;
    setDefaultValue(newValue);
  };

  const addToCart = (product: CustomProductProps): void => {
    alert("Thêm sản phẩm vào giỏ hàng");
    product.quantity = 1;
    product.isExist = true;
    setCarts((prevCart) => {
      const newCart = [...prevCart, product];
      setCartLength(newCart.length);
      return newCart;
    });
  };

  const removeFromCart = (productId: string) => {
    alert("Xóa sản phẩm khỏi giỏ hàng");
    const updatedCart = carts.filter((item) => item.id !== productId);
    setCarts(updatedCart);
    setCartLength(updatedCart.length);
  };

  const isInCart = (productId: string) => {
    const checkInCart = carts.find((product) => product.id == productId);
    return checkInCart;
  };

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
    return (
      <p className="messages-error text-medium">{ERROR_MESSAGES.fetchError}</p>
    );
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
