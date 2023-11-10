// React router
import { Outlet } from "react-router-dom";

// Components
import { Footer, Navbar } from "../components";
import { CartProvider } from "../stores/contexts/CartContext";

const MainLayout = () => {
  return (
    <div className="container-page">
      <div className="component-layout font-family">
        <CartProvider>
          <Navbar />
          <Outlet />
        </CartProvider>
      </div>
      <div className="mg-footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
