// React Hook
import React, { Suspense, lazy, useCallback, useState } from "react";

// Component
import { Loading } from "../../components";

// Constant, Type and Helper
import useFetch from "../../hooks/useFetch";
import delay from "../../helpers/Delay";

const ListProduct = lazy(() =>
  delay(import("../../components/ListProduct/index"))
);

// Component Menu
const Menu: React.FC = (): React.ReactElement => {
  const [displayedProductCount, setDisplayedProductCount] = useState(8);
  const [isFull, setIsFull] = useState(false);

  const { products, isLoading, error } = useFetch();

  // Method Loadmore
  const handleShowMoreProducts = useCallback(() => {
    const updatedProductCount = displayedProductCount + 4;
    setDisplayedProductCount(updatedProductCount);
    setIsFull(products.length <= updatedProductCount);
  }, [displayedProductCount, products.length]);

  return (
    <Suspense fallback={<Loading />}>
      <ListProduct
        onShowMoreProducts={handleShowMoreProducts}
        isFull={isFull}
        displayedProductCount={displayedProductCount}
        error={error}
        products={products}
        isLoading={isLoading}
      />
    </Suspense>
  );
};

export default Menu;
