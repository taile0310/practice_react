// CSS
import "./menu.css";

// React Hook
import React, { useContext, useEffect, useState } from "react";

// Component
import { ListProduct } from "../../components";
import { CartLength } from "../../layout/MainLayout";

// LocalStorage
import { getListCart } from "../../helpers/data-localStorage";

// Constant and Type
import { CustomProductProps } from "../../types";
import { BASE_URL } from "../../constant/base-url";

// Component Menu
const Menu: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [defaultValue, setDefaultValue] = useState(8);
  const [error, setError] = useState(false);
  const [carts, setCarts] = useState<CustomProductProps[]>(getListCart());
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

  const cartContext = useContext(CartLength);
  if (cartContext === null) {
    return null;
  }

  const { setCartLength } = cartContext;

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

  return (
    <ListProduct
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      isInCart={isInCart}
      showMorePoducts={showMorePoducts}
      isFull={isFull}
      defaultValue={defaultValue}
      error={error}
      products={products}
      isLoading={isLoading}
    />
  );
};

export default Menu;
