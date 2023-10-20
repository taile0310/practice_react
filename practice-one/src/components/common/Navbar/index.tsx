// CSS
import "./Navbar.css";

// React router
import { NavLink } from "react-router-dom";

// Constants and inteface
import NAV_LINKS from "../../../constants/nav-link";
import { CustomNavbarProps } from "../../../types";

// Image
import Image from "../Image";
// Component Navbar
const Navbar: React.FC<CustomNavbarProps> = ({
  width,
  cartLength,
  navigationHandle,
}) => {
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
            onClick={name === "Checkout" ? navigationHandle : undefined}>
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
