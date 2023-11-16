// React Hooks and Router
import React, { Suspense, lazy } from "react";

// Component
import { ErrorBoundary, Loading } from "../../components";

// Helper
import delay from "../../helpers/delay";

const ListCart = lazy(() => delay(import("../../components/ListCart/index")));

// Component Cart
const Cart: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ListCart />;
      </ErrorBoundary>
    </Suspense>
  );
};

export default Cart;
