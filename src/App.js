import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './App.css';
import "./i18n";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from './components/Navbar.js';
import Home from "./pages/Home.js";     
import PageOfServices from "./pages/PageOfServices.js";   
import Footer from './components/Footer.js'
//import HouseRepairCalculator from "./pages/HouseRepairCalculator.js";
import theme from "../src/components/theme.js"
import HouseRepairCalculator2 from "./pages/HouseRepairCalculator2.js";
import Gallery from "./pages/Gallery.js";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";



function App() {

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <ThemeProvider theme={theme(i18n.language)}>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<PageOfServices />} />
        <Route path="/calculator" element={<HouseRepairCalculator2/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
        
    </Router>
    </ThemeProvider>
  );
}

export default App;
