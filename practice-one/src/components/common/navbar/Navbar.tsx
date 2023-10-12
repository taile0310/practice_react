import { Link } from "react-router-dom";
import NAV_LINKS from "../../../constants/nav-link";
import "./navbar.css";
import { CustomNavbarProps } from "../../../types/interface";
import Image from "../image/Image";

const Navbar = ({ width }: CustomNavbarProps) => {
  const widthNavbar = {
    width: `${width}px`,
  };

  return (
    <nav className="nav-menu" style={widthNavbar}>
      {NAV_LINKS.map((navLinks) => {
        const { id, name, icon, path } = navLinks;
        return (
          // <a >
          <Link className="nav-item" key={id} to={path}>
            {/* <img className="icon" src={icon} alt={name} /> */}
            <Image className="icon" src={icon} alt={name} />
          </Link>
          // </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
