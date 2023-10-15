import { NavLink } from "react-router-dom";
import NAV_LINKS from "../../../constants/nav-link";
import "./navbar.css";
import { CustomNavbarProps } from "../../../types/interface";
import Image from "../image/Image";

const Navbar = ({ width }: CustomNavbarProps) => {
  const widthNavbar = {
    width: `${width}px`,
  };

  const navLinkStyles = ({ isActive }: CustomNavbarProps) => {
    return {
      backgroundColor: isActive ? "#F1D5BB" : "",
      PointerEvent: isActive ? "none" : "",
      cursor: isActive ? "default" : "",
    };
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
            style={navLinkStyles}>
            {name == "Cart" ? <div className="cart-number">10</div> : ""}
            <Image className="icon" src={icon} alt={name} />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
