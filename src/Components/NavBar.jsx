import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import logo from "../Assets/gymlogo.jpg";
import "../Components/CSS/NavBar.css";

const NavBar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="Gym-logo" className="logo" />
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">Training</a>
        <a href="#">Pricing</a>
        <a href="#">Trainers</a>
        <a href="#">Location</a>
        <a href="#">Login/Register</a>
        <a href="#">About</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
