// React router
import React, { Suspense, lazy } from "react";

// Component
import { Loading } from "../../components";

const FormCheckout = lazy(() => import("../../components/FormCheckout/index"));

const Checkout: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <FormCheckout />
    </Suspense>
  );
};

export default Checkout;
