// React Hook
import React, { Suspense, lazy } from "react";

// Component
import { Loading } from "../../components";

const ListProduct = lazy(() => import("../../components/ListProduct/index"));

// Component Menu
const Menu: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <ListProduct />
    </Suspense>
  );
};

export default Menu;
