import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/logo.png";
import {
  FaBars,
  FaHome,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState } from "react";
import { FaBowlFood, FaX } from "react-icons/fa6";
export default function Navbar() {
  const [toggleState, setToggleState] = useState(false);

  const toggleMenu = () => {
    setToggleState(!toggleState);
  };
  return (
    <div>
      <div className="navbar">
        <div className="brand-logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu">
          <div className="menu-toggle" onClick={toggleMenu}>
            {toggleState ? <FaX /> : <FaBars />}
          </div>
        </div>
      </div>
      <div
        className={
          toggleState
            ? "mobile-menu-dropdown active"
            : "mobile-menu-dropdown inactive"
        }
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setToggleState(false)} // close menu after click
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setToggleState(false)}
            >
              <FaBowlFood /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setToggleState(false)}
            >
              <FaPhoneAlt /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
