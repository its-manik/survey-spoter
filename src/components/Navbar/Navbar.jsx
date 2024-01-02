import { useState } from "react";
import logo from "../../assets/SS_Main.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickham = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="hamburger" onClick={clickham}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navLinks${!menuOpen ? " open" : ""}`}>
          <a href="#">How It Wroks</a>
          <a href="#">Data Protection</a>
          <a href="#">FAQs</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
