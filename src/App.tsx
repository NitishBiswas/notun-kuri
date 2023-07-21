import React, { useEffect, useState } from "react";
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
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useLocalStorageActiveNav from "./hooks/useLocalStorageActiveNav";
import useGetLanguage from "./hooks/useGetLanguage";
import Story from "./pages/story";

const App = () => {
  const [activeNav, setActiveNav] = useLocalStorageActiveNav("home");
  const language = useGetLanguage();

  useEffect(() => {
    const title = language === 'English' ? 'Notun Kuri' : 'নতুন কুঁড়ি'
    document.title = title;
  }, [language]);

  return (
    <div className="min-h-[100vh] bg-white flex flex-col justify-between">
      <Router>
        <div>
          <Header activeNav={activeNav} setActiveNav={setActiveNav} />
          <Routes>
            <Route path="/" element={<Home setActiveNav={setActiveNav} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/research" element={<Research setActiveNav={setActiveNav} />} />
            <Route path="/solutions" element={<Soluttions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-early-access" element={<GetEarlyAccess />} />
            <Route path="/story/:id" element={<Story />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Router>
      <ToastContainer style={{ zIndex: 1000000 }} />
    </div>
  );
};

export default App;
