import { useState } from "react";
import logo from "../../assets/SS_Main.svg";
import "./Navbar.css";

const Navbar = ({list}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickham = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="logo">
          <a href="#hero">
            <img src={logo} alt="" />
          </a>
        </div>
        {list && (
          <div className="hamburger" onClick={clickham}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        )}
        <div className={`${list ? "navLinks" : "" } ${!menuOpen ? " open" : ""}`}>
          {list?.map((item, index) => (
              <a href={item.id}>{item.text}</a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
