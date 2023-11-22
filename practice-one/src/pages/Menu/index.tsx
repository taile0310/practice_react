// React Hook
import React, { Suspense, lazy } from "react";

// Component
import { Loading } from "../../components";
import ErrorBoundary from "../../components/ErrorBoundary";
import useFetch from "../../hooks/useFetch";

const ListProduct = lazy(() => import("../../components/ListProduct/index"));

const Menu: React.FC = (): React.ReactElement => {
  const { handleRemoveProduct } = useFetch();

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ListProduct handleRemoveProduct={handleRemoveProduct} />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Menu;
