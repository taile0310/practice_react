// React Hook
import React, { Suspense, lazy } from "react";

// Component
import { Loading } from "../../components";
import ErrorBoundary from "../../components/ErrorBoundary";

const ListProduct = lazy(() => import("../../components/ListProduct/index"));

const Menu: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ListProduct />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Menu;
