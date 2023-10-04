import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import "../styles/header.scss";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header({ hideBtn, location }) {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <header className={`header ${location}`} id="header">
      <div className="container">
        <div className="header-mobile">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <FaBars
            className="toggle-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <nav className="nav">
          <ul className={` nav-items ${showMenu ? "show" : ""}`}>
            <NavLink onClick={closeMenu} to="/">
              Home
            </NavLink>
            <NavLink onClick={closeMenu} to="/menu">
              Menu
            </NavLink>
            <NavLink onClick={closeMenu} to="/aboutUs">
              About Us
            </NavLink>
            <NavLink onClick={closeMenu} to="/ourStory">
              Our Story
            </NavLink>
            <NavLink onClick={closeMenu} to="/blogs">
              Blog
            </NavLink>
            <NavLink onClick={closeMenu} to="/contact">
              Contact
            </NavLink>
          </ul>
        </nav>

        <Button title={"Contact Us"} clas={"contact-btn"} hideBtn={hideBtn} />
      </div>
    </header>
  );
}
export default Header;
