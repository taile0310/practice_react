// React router
import React, { Suspense, lazy } from "react";

// Component
const FormCheckout = lazy(() => import("../../components/FormCheckout/index"));
import { Loading } from "../../components";

const Checkout: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <FormCheckout />
    </Suspense>
  );
};

export default Checkout;
