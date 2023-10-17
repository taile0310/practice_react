import { logo, home, menu, cart, checkout, back } from "../assets/image";

const NAV_LINKS = [
  {
    id: 1,
    name: "Logo",
    icon: logo,
    path: "/home",
  },
  {
    id: 2,
    name: "Home",
    icon: home,
    path: "/home",
  },
  {
    id: 3,
    name: "Menu",
    icon: menu,
    path: "/menu",
  },
  {
    id: 4,
    name: "Cart",
    icon: cart,
    path: "/cart",
  },
  {
    id: 5,
    name: "Checkout",
    icon: checkout,
    path: "/checkout",
  },
  {
    id: 6,
    name: "Back",
    icon: back,
    path: "/home",
  },
];

export default NAV_LINKS;
