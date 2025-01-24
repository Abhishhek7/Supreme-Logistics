import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure you import the correct router here

import Navbar from "./pages/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./pages/Product";
import Aboutus from "./pages/Aboutus";
import Careers from "./pages/Careers";

const App = () => {
  return (
    <BrowserRouter> {/* Wrap everything with BrowserRouter only once */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
