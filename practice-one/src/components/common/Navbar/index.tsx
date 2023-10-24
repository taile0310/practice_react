// CSS
import "./navbar.css";

// React router and Hook
import { NavLink } from "react-router-dom";
import { useContext } from "react";

// Constants and Type
import NAV_LINKS from "../../../constant/nav-link";

// Conponent
import { Image } from "..";

// Context
import { CartContext } from "../../../context/CartContext";

export type CustomNavbarProps = {
  width?: number;
  className?: string;
};

// Component Navbar
const Navbar: React.FC<CustomNavbarProps> = ({ width }) => {
  const widthNavbar = {
    width: `${width}px`,
  };

  const cartContext = useContext(CartContext);
  if (cartContext === null) {
    return null;
  }
  const { getLength, handleCheckout } = cartContext;

  return (
    <nav className="nav-menu font-family" style={widthNavbar}>
      {NAV_LINKS.map((navLinks) => {
        const { id, name, icon, path } = navLinks;
        return (
          <NavLink
            className="nav-item"
            key={id}
            to={path}
            onClick={name === "Checkout" ? handleCheckout : undefined}>
            {name === "Cart" && (
              <div className="cart-number">{getLength()}</div>
            )}
            <Image className="icon" src={icon} alt={name} />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
