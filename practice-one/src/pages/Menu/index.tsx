// React Hook
import React, { useEffect, useState } from "react";

// Component
import { ListProduct } from "../../components";

// Constant, Type and Helper
import { BASE_URL } from "../../constant/base-url";
import { CustomProductProps } from "../../types/TProduct";
import { fetchData } from "../../helpers/fetch-data";

// Component Menu
const Menu: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [defaultValue, setDefaultValue] = useState(8);
  const [error, setError] = useState(false);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    fetchData({ url: BASE_URL, setProducts, setIsLoading, setError });
  }, []);

  useEffect(() => {
    setIsFull(products.length <= defaultValue);
  }, [products, defaultValue]);

  // Method Loadmore
  const onShowMorePoducts = () => {
    const newValue = defaultValue + 4;
    setDefaultValue(newValue);
  };

  return (
    <ListProduct
      onShowMorePoducts={onShowMorePoducts}
      isFull={isFull}
      defaultValue={defaultValue}
      error={error}
      products={products}
      isLoading={isLoading}
    />
  );
};

export default Menu;
