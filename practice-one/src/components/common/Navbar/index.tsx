// CSS
import "./Navbar.css";

// React router and Hook
import { NavLink } from "react-router-dom";
import { FC, ReactElement, memo } from "react";

// Constants
import { NAV_LINKS } from "../../../constants";

// Component
import { Image } from "..";

// Stores
import { useCartStore } from "../../../stores";

// Define props for navbar
export type CustomNavbarProps = {
  width?: number;
};

const Navbar: FC<CustomNavbarProps> = ({ width }): ReactElement => {
  // Use hooks to get functions
  const { getLength, handleCheckout } = useCartStore();

  const widthNavbar = {
    width: `${width}px`,
  };

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

export default memo(Navbar);
