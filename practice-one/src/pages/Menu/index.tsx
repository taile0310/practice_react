// React Hook
import { FC, ReactElement, Suspense, lazy } from "react";

// Component
import { Loading } from "../../components";
import ErrorBoundary from "../../components/ErrorBoundary";

const ListProduct = lazy(() => import("../../components/ListProduct/index"));

const Menu: FC = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ListProduct />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Menu;
