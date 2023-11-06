// React Hook
import React, { useState } from "react";

// Component
import { ListProduct } from "../../components";

// Constant, Type and Helper
import useFetch from "../../hooks/useFetch";

// Component Menu
const Menu: React.FC = (): React.ReactElement => {
  const [displayedProductCount, setDisplayedProductCount] = useState(8);
  const [isFull, setIsFull] = useState(false);

  const { products, isLoading, error } = useFetch();

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
