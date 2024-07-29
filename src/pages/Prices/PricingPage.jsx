import React from "react";
import "./Pricing.css";

  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["Real-Time Market Data", "Secure Wallets", "Basic Support"],
    },
    {
      name: "Pro",
      price: "$29.99",
      features: [
        "All Basic Features",
        "Instant Buy/Sell",
        "Advanced Trading Tools",
        "24/7 Support",
      ],
    },
    {
      name: "Enterprise",
      price: "$99.99",
      features: [
        "All Pro Features",
        "Automated Trading",
        "Personal Account Manager",
        "Priority Support",
      ],
    },
  ];

  
const PricingPage = () => {
  return (
    <div className="pricing-page">
      <h2>Pricing Plans</h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className="plan" key={index}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;