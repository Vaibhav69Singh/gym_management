import React from "react";
import "./CSS/Price.css";

const Price = () => {
  // Sample data for different membership plans
  const plans = [
    {
      name: "Basic + registration",
      price: "Rs. 1300/month",
    },
    {
      name: "Membership + PT",
      price: "Rs. 4000/month",
    }, //4500 , 5500
    {
      name: "3 months (Membership + registration)",
      price: "Rs. 2500",
    },
    {
      name: "6 months (Membership + registration)",
      price: "Rs. 4500",
    },
    {
      name: "12 months (Membership + registration)",
      price: "Rs. 5500",
    },
  ];

  return (
    <div id="Pricing" className="price-component">
      <h2>Membership Plans</h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="card-header">
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
            </div>
            <div className="card-body"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
