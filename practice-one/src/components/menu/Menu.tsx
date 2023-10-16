import { useState } from "react";
import Navbar from "../common/navbar/Navbar";
import ListProduct from "../list-product/ListProduct";
import "./Menu.css";

const Menu = () => {
  const items = JSON.parse(localStorage.getItem("CartProducts") || "[]");

  const [cartLength, setCartLength] = useState<number>(items.length);
  return (
    <section className="component-layout ">
      <Navbar cartLength={cartLength} />
      <ListProduct setCartLength={setCartLength} />
    </section>
  );
};

export default Menu;
