import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js';
import Home from "./pages/Home.js";     
import PageOfServices from "./pages/PageOfServices.js";   
import Footer from './components/Footer.js'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<PageOfServices />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
