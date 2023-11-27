// CSS
import "./Navbar.css";

// React router and Hook
import { NavLink } from "react-router-dom";
import { FC, ReactElement, memo, useMemo } from "react";

// Constants
import { NAV_LINKS } from "../../../constants";

// Component
import { Image } from "..";

// Stores
import { useCartStore } from "../../../stores";

export type CustomNavbarProps = {
  width?: number;
};

const Navbar: FC<CustomNavbarProps> = ({ width }): ReactElement => {
  const widthNavbar = {
    width: `${width}px`,
  };

  const { getLength, handleCheckout } = useCartStore();

  const handleGetLength = useMemo(() => getLength(), [getLength]);

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
              <div className="cart-number">{handleGetLength}</div>
            )}
            <Image className="icon" src={icon} alt={name} />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default memo(Navbar);
