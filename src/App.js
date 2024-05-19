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
import img2 from "./Assets/img2.jpg";
import img3 from "./Assets/img3.jpg";
import img4 from "./Assets/img4.jpg";
import img5 from "./Assets/img5.jpg";
import Home from "./Components/Home";

function App() {
  const images = [img1, img2, img3, img4, img5];
  return (
    <div className="container">
      <NavBar />
      <Home images={images} />
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
      <div className="price">
        <Price />
      </div>
      <div className="location">
        <Location />
      </div>
      <About />
    </div>
  );
}

export default App;
