import React, { useState } from "react";
import "../Components/CSS/Card.css";

const Card = ({ imgSrc, imgAlt, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? "is-flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card-inner">
          <div className="card-front">
            {imgSrc && imgAlt && (
              <img src={imgSrc} alt={imgAlt} className="card-img" />
            )}
            {title && <h1 className="card-title">{title}</h1>}
          </div>
          <div className="card-back">
            {title && <h1 className="card-title">{title}</h1>}
            {description && <p className="card-description">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
