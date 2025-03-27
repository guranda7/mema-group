import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/AboutUsSection.css'
import image from '../images/grey-sofa.jpg'
import SeeMoreButton from './SeeMoreButton'
import { Link } from 'react-router-dom'

function AboutUsSection () {
    const { t, i18n } = useTranslation();

    return(
        <div className="about-us-section">
            
            <div className="about-us-features">
                <div className="about-us-text">
                   <h1>{t('aboutUsTitle')}</h1>
                    <p>{t('aboutDescription')}</p>
                
                <Link to="/about-us" ><SeeMoreButton></SeeMoreButton></Link>
                
                </div>
                <div className="about-us-image">
                    <img className="sofa-image" src={image}></img>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection;