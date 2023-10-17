// CSS
import "./Menu.css";
// React Hook
import { useState } from "react";

// Component
import Navbar from "../common/navbar/Navbar";
import ListProduct from "../list-product/ListProduct";
import { getListCart } from "../../helper/data-localStorage";

// Component Menu
const Menu = () => {
  // Initialize state cartLength to store the length of the cart from LocalStorage
  const [cartLength, setCartLength] = useState<number>(getListCart().length);

  return (
    <section className="component-layout ">
      <Navbar cartLength={cartLength} />
      <ListProduct setCartLength={setCartLength} />
    </section>
  );
};

export default Menu;
