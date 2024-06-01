import React from "react";
import "../Components/CSS/About.css";

const About = () => {
  return (
    <div id="About" className="about-container">
      <div className="description">
        <h3 className="description-part1">About Our Gym </h3>
        <br />
        <p className="description-part2">
          Welcome to Fitness Point, where community meets with fitness! Our gym
          ecosystem is dedicated towards helping individuals of all fitness
          levels achieve their health and wellness goals.
        </p>
        <br />
        <p className="description-part3">
          At Fitness Point, we offer a wide range of state-of-the-art equipment
          and facilities to support your fitness journey. Whether you're looking
          to build strength, improve cardiovascular health, or simply maintain
          an active lifestyle, we have everything you need to succeed.
        </p>
        <br />
        <br />
      </div>
      <div className="contact">
        <h3>Contact Information</h3>
        <br />
        <ul>
          <li>Email : example1@gmail.com</li>
          <li>Phone : +911234567890</li>
          <li>Address : Fitness Point, 6889+V5, Bhilai, Chhattisgarh 490020</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
