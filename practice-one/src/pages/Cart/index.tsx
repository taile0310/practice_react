// React Hooks and Router
import React, { Suspense, lazy } from "react";

// Component
import { ErrorBoundary, Loading } from "../../components";

const ListCart = lazy(() => import("../../components/ListCart/index"));

const Cart: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ListCart />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Cart;
