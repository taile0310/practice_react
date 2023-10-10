import React from "react";
import { NavLink } from "react-router-dom";
import NAV_LINKS from "../../../constants/navLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-menu">
        {NAV_LINKS.map((navLinks) => {
          const { id, name, icon, path } = navLinks;
          return (
            <a className="nav-item" key={id}>
              <NavLink to={path}>
                <img className="icon" src={icon} alt={name} />
              </NavLink>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
