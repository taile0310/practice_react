import React from "react";
import Card from "../common/card/Card";
import ListCart from "../list-cart/ListCart";
import Navbar from "../common/navbar/Navbar";

const Cart = () => {
  return (
    <div className="component-layout font-family">
      <Navbar />
      <ListCart />
    </div>
  );
};

export default Cart;
