// React Hook
import React, { useEffect, useState } from "react";

// Component
import { ListProduct } from "../../components";

// Constant, Type and Helper
import { CustomProductProps } from "../../types/Product";
import { fetchData } from "../../helpers/FetchData";
import { ERROR_MESSAGES } from "../../constants/Error";
import { BASE_URL } from "../../constants/BaseUrl";

// Component Menu
const Menu: React.FC = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CustomProductProps[]>([]);
  const [displayedProductCount, setDisplayedProductCount] = useState(8);
  const [error, setError] = useState<string | null>(null);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    const fetchDataFromUrl = async () => {
      try {
        const data = await fetchData({ url: BASE_URL });
        setProducts(data);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(ERROR_MESSAGES.FETCH);
      }
    };
    fetchDataFromUrl();
  }, []);

  // Method Loadmore
  const handleShowMorePoducts = () => {
    const updatedProductCount = displayedProductCount + 4;
    setDisplayedProductCount(updatedProductCount);
    setIsFull(products.length <= updatedProductCount);
  };

  return (
    <ListProduct
      onShowMorePoducts={handleShowMorePoducts}
      isFull={isFull}
      displayedProductCount={displayedProductCount}
      error={error}
      products={products}
      isLoading={isLoading}
    />
  );
};

export default Menu;
