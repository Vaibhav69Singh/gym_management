import React from "react";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Location from "./Components/Location";
import About from "./Components/About";
import muscleGain from "./Assets/img_muscle.jpg";
import weightLoss from "./Assets/img_fatloss.jpg";
import maintain from "./Assets/pic_maintain.jpg";
import "../src/App.css";
import Price from "./Components/Price";
import img1 from "./Assets/img1.jpg";
import ScrollSpy from "react-ui-scrollspy";


function App() {
  return (
    <div className="container">
       <ScrollSpy
       scrollThrottle={100}
       offsetTop={-50}
       activeClassName="is-current"
       >
      <NavBar />
      <div id="Home" className="fst-img-text">
        <p className="about-fitness">
          "Strength does not come from winning. Your struggles develop your
          strengths. When you go through hardships and decide not to surrender,
          that is strength."
        </p>
        <img className="img1" src={img1} />
      </div>
      <div id="Training" className="programs">
        <p className="programs-text">
          Gym helps a peroson to escale their health and also their confidence.
          Here in our gym we provide three types of programs for all our
          members.
        </p>
        <div className="card-holder">
          <Card
            imgSrc={muscleGain}
            imgAlt="Muscle Gain"
            title="Muscle Gain"
            description="In this training, the client can gain muscles with proper training and diet"
          />
          <Card
            imgSrc={weightLoss}
            imgAlt="Weight Loss"
            title="Weight Loss"
            description="In this training, the client can get rid of obesity and gain a healthy life"
          />
          <Card
            imgSrc={maintain}
            imgAlt="Maintain"
            title="Maintain"
            description="In this training, the client gets help in maintaining the muscle and weight"
          />
        </div> 
      </div>
      <div id="Price" className="price">
        <Price />
      </div>
      <div id="Location" className="location">
        <Location />
      </div>
      <div id="" className="about">
        <About />
      </div>
      </ScrollSpy>
    </div>
  );
}

export default App;
