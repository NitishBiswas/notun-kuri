import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Research from "./pages/research";
import Soluttions from "./pages/soluttions";
import Blog from "./pages/blog";
import GetEarlyAccess from "./pages/get-early-access";
import Footer from "./components/Footer";

const App = () => {
  const [activeNav, setActiveNav] = useState<string>("home");
  return (
    <div className="min-h-[100vh] bg-white flex flex-col justify-between">
      <Router>
        <div>
          <Header activeNav={activeNav} setActiveNav={setActiveNav} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/research" element={<Research />} />
            <Route path="/solutions" element={<Soluttions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-early-access" element={<GetEarlyAccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Router>
    </div>
  );
};

export default App;
