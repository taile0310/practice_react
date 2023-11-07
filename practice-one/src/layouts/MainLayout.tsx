// React router
import { Outlet } from "react-router-dom";

// Components
import { Navbar } from "../components";
import { CartProvider } from "../stores/contexts/CartContext";

const MainLayout = () => {
  return (
    <div className="component-layout font-family">
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>
    </div>
  );
};

export default MainLayout;
