// CSS
import "./Navbar.css";

// React router and Hook
import { NavLink } from "react-router-dom";
import { memo, useContext } from "react";

// Constants and Type
import NAV_LINKS from "../../../constants/NavLink";

// Component
import { Image } from "..";

// Context
import { CartContext } from "../../../stores/contexts/CartContext";

export type CustomNavbarProps = {
  width?: number;
};

// Component Navbar
const Navbar: React.FC<CustomNavbarProps> = memo(
  ({ width }): React.ReactElement => {
    const widthNavbar = {
      width: `${width}px`,
    };

    const { getLength, handleCheckout } = useContext(CartContext);

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
  }
);

export default Navbar;
