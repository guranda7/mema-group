import '../styles/HeroSection.css'
import Services from './Services';
import image from '../images/modern-interior.jpg'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomInput from './CustomInput';

function HeroSection () {
    return (
        <div className="hero-container">
         <CustomInput></CustomInput>
        <div className="subtitle">
         <p> Affordable & reliable 
            <br/>repairs for your home.
          <br/>Book a service today!</p>
        </div>
        </div>
    )
}

export default HeroSection;