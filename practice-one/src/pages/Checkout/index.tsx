// React router
import { FC, ReactElement, Suspense, lazy } from "react";

// Component
import { Loading } from "../../components";

const FormCheckout = lazy(() => import("../../components/FormCheckout/index"));

const Checkout: FC = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <FormCheckout />
    </Suspense>
  );
};

export default Checkout;
