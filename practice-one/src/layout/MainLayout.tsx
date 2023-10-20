import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import { getListCart } from "../helpers/data-localStorage";
import { createContext, useState } from "react";
import { CartContextValue } from "../types";
import { MouseEvent } from "react";
import { NOTIFY } from "../constant/error";

export const CartLength = createContext<CartContextValue | null>(null);

const MainLayout = () => {
  const [cartLength, setCartLength] = useState<number>(getListCart().length);
  const cartContextValue: CartContextValue = {
    setCartLength,
  };
  const navigate = useNavigate();
  const handleCheckout = (event: MouseEvent<HTMLAnchorElement>) => {
    if ((cartLength || 0) <= 0) {
      alert(NOTIFY.EMPTY);
      event.preventDefault();
      navigate("/menu");
    }
  };

  return (
    <div className="component-layout font-family">
      <Navbar cartLength={cartLength} navigationHandle={handleCheckout} />
      <CartLength.Provider value={cartContextValue}>
        <Outlet />
      </CartLength.Provider>
    </div>
  );
};

export default MainLayout;
