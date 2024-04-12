import React, { useState } from "react";
import logo from "../Assets/gymlogo.jpg";
import "../Components/NavBar.css";

const NavBar = () => {
  const [isOpen, setItsOpen] = useState(false);
  const toggleNavBar = () => {
    setItsOpen(!isOpen);
  };
  return (
    <nav className="navBar">
      <div className="navbar-container">
        <img className="logo" src={logo} alt="Fitness Point" />
      </div>
    </nav>
  );
};
export default NavBar;
