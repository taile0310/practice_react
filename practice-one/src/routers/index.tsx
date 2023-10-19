import { Cart, Checkout, Menu } from "../pages";

export const routers = [
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];
