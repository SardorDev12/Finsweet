import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import "../styles/header.scss";
import Button from "./Button";

function Header({ hideBtn, location }) {
  return (
    <header className={`header ${location}`} id="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
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

        <Button title={"Contact Us"} clas={"contact-btn"} hideBtn={hideBtn} />
      </div>
    </header>
  );
}
export default Header;
