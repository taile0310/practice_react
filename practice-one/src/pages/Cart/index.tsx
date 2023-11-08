// React Hooks and Router
import React, { Suspense, lazy } from "react";

// Component
import { Loading } from "../../components";

// Helper
import delay from "../../helpers/Delay";

const ListCart = lazy(() => delay(import("../../components/ListCart/index")));

// Component Cart
const Cart: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <ListCart />;
    </Suspense>
  );
};

export default Cart;
