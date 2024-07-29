import React from "react";
import "./Features.css";

const featuresList = [
  {
    title: "Real-Time Market Data",
    description:
      "Get live updates on cryptocurrency prices, market trends, and trading volumes.",
  },
  {
    title: "Secure Wallets",
    description:
      "Store your cryptocurrencies safely with our advanced encryption and security features.",
  },
  {
    title: "Instant Buy/Sell",
    description:
      "Trade cryptocurrencies instantly with our simple and intuitive interface.",
  },
  {
    title: "Advanced Trading Tools",
    description:
      "Utilize charts, technical indicators, and real-time market analysis for informed trading.",
  },
  {
    title: "Mobile App",
    description:
      "Trade and manage your portfolio on the go with our mobile app for iOS and Android.",
  },
  {
    title: "Educational Resources",
    description:
      "Learn about cryptocurrencies, blockchain, and trading strategies with our comprehensive resources.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Get assistance anytime with our round-the-clock customer support.",
  },
  {
    title: "Automated Trading",
    description:
      "Set up trading bots to automate your trades based on predefined strategies.",
  },
  {
    title: "Low Fees",
    description:
      "Enjoy competitive transaction and trading fees on our platform.",
  },
  {
    title: "Security Features",
    description:
      "Benefit from advanced security measures like two-factor authentication and cold storage for assets.",
  },
];
const FeaturesPage = () => {
  return (
    <div className="features">
      <h2>Features</h2>
      <div className="features-container">
        {featuresList.map((feature, index) => (
          <div className="features" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
