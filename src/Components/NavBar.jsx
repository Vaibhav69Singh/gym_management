import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
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
        <Link
          to="Home"
          smooth={true}
          duration={500}
          offset={-60}
          onClick={showNavBar}
        >
          Home
        </Link>
        <Link
          to="Training"
          smooth={true}
          duration={500}
          offset={-60}
          onClick={showNavBar}
        >
          Training
        </Link>
        <Link
          to="Price"
          smooth={true}
          duration={500}
          offset={-60}
          onClick={showNavBar}
        >
          Pricing
        </Link>
        <Link
          to="Location"
          smooth={true}
          duration={500}
          offset={-60}
          onClick={showNavBar}
        >
          Location
        </Link>
        <a href="#">Login/Register</a>
        <Link
          to="About"
          smooth={true}
          duration={500}
          offset={-60}
          onClick={showNavBar}
        >
          About
        </Link>
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
