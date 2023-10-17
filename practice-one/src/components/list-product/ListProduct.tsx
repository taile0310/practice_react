// CSS
import "./listProduct.css";

//React Hooks
import React, { useEffect, useState } from "react";

// Component
import Image from "../common/image/Image";
import Footer from "../footer/Footer";
import Button from "../common/button/Button";

// Interface
import { CustomProductProps, ListProductProps } from "../../types/interface";

// Constants, Image, Message error
import { spinner } from "../../assets/image";
import { BASE_URL } from "../../constants/base-url";
import { ERROR_MESSAGES } from "../../constants/error";
import { getListCart } from "../../helper/data-localStorage";

// Component ListProduct
const ListProduct: React.FC<ListProductProps> = ({ setCartLength }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [defaultValue, setDefaultValue] = useState(8);
  const [error, setError] = useState(false);
  const [carts, setCarts] = useState<CustomProductProps[]>(getListCart);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    fetchData(BASE_URL);
  }, []);

  useEffect(() => {
    setIsFull(products.length <= defaultValue);
  }, [products, defaultValue]);

  useEffect(() => {
    localStorage.setItem("CartProducts", JSON.stringify(carts));
  }, [carts]);

  // Method Loadmore
  const showMorePoducts = () => {
    const newValue = defaultValue + 4;
    setDefaultValue(newValue);
  };

  /**
   * Function addToCart to add products to the cart
   * @param product
   */
  const addToCart = (product: CustomProductProps): void => {
    alert("Are you sure you want to add this product to your cart?");
    product.quantity = 1;
    product.isExist = true;
    setCarts((prevCart) => {
      const newCart = [...prevCart, product];
      // Update the length of the shopping cart
      setCartLength(newCart.length);
      return newCart;
    });
  };

  /**
   * Method to remove product from cart
   * @param productId
   */
  const removeFromCart = (productId: string) => {
    alert("Are you sure to remove this product from your cart?");
    const updatedCart = carts.filter((item) => item.id !== productId);
    setCarts(updatedCart);
    setCartLength(updatedCart.length);
  };

  /**
   * isInCart function to check if the product is already in the cart
   * @param productId
   * @returns
   */
  const isInCart = (productId: string) => {
    const checkInCart = carts.find((product) => product.id == productId);
    return checkInCart;
  };

  /**
   * FetchData function to fetch data from URL and process results
   * @param url
   */
  const fetchData = async (url: string) => {
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
  };

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
