// React hooks and router
import { createContext, useState } from "react";
import { MouseEvent } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Local Storage
import { getListCart } from "../helpers/data-localStorage";

// Constants and Type
import { CartContextValue } from "../types";
import { NOTIFY } from "../constant/error";

// Components
import { Navbar } from "../components";

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
