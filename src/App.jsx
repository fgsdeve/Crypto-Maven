import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import FeaturesPage from "./pages/Features/FeaturesPage";
import PricingPage from "./pages/Prices/PricingPage";
import BlogPage from "./pages/Blog/BlogPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
