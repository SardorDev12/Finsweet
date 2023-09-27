import { NavLink } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import "../styles/header.scss";
import { FaArrowRight } from "react-icons/fa";

function Header({ hideBtn, location }) {
  return (
    <header className={`header ${location}`} id="header">
      <div className="container">
        <div className="logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>
            <NavLink to="/ourStory">Our Story</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>
        <button
          type="button"
          className={`${hideBtn ? "hidden" : ""}  contact-btn`}
        >
          Contact Us
          <FaArrowRight />
        </button>
      </div>
    </header>
  );
}
export default Header;