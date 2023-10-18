import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { getListCart } from "../helper/data-localStorage";
import { createContext, useState } from "react";
import { CartContextValue } from "../types/interface";

export const CartLength = createContext<CartContextValue | null>(null);

const MainLayout = () => {
  const [cartLength, setCartLength] = useState<number>(getListCart().length);
  const cartContextValue: CartContextValue = {
    setCartLength,
  };
  return (
    <div className="component-layout font-family">
      <Navbar cartLength={cartLength} />
      <CartLength.Provider value={cartContextValue}>
        <Outlet />
      </CartLength.Provider>
    </div>
  );
};

export default MainLayout;
