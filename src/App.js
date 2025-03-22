import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js';
import Home from "./pages/Home.js";     
import PageOfServices from "./pages/PageOfServices.js";   
import Footer from './components/Footer.js'
import HouseRepairCalculator from "./pages/HouseRepairCalculator.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<PageOfServices />} />
        <Route path="/calculator" element={<HouseRepairCalculator/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
