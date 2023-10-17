// CSS
import "./navbar.css";

// React router
import { NavLink } from "react-router-dom";

// Constants and inteface
import NAV_LINKS from "../../../constants/nav-link";
import { NavbarProps } from "../../../types/interface";

// Image
import Image from "../image/Image";
import { MouseEvent } from "react";

// Component Navbar
const Navbar: React.FC<NavbarProps> = ({ width, cartLength, isActive }) => {
  const widthNavbar = {
    width: `${width}px`,
  };

  const handleCheckout = (event: MouseEvent<HTMLAnchorElement>) => {
    if ((cartLength || 0) <= 0) {
      alert("Your shopping cart is empty, cannot checkout.");
      event.preventDefault();
    }
  };

  return (
    <nav className="nav-menu font-family" style={widthNavbar}>
      {NAV_LINKS.map((navLinks) => {
        const { id, name, icon, path } = navLinks;
        return (
          <NavLink
            className={`nav-item ${isActive ? "active" : ""}`}
            key={id}
            to={path}
            onClick={name === "Checkout" ? handleCheckout : undefined}>
            {name == "Cart" ? (
              <div className="cart-number">{cartLength}</div>
            ) : (
              ""
            )}
            <Image className="icon" src={icon} alt={name} />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
